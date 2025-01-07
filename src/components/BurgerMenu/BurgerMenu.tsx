import { Link, useLocation } from "react-router-dom";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "contexts/ModalContext/ModalContext";
import { UserContext } from "contexts/UserContext/UserContext";
import Icons from "components/Icons";
import OutlinedBtn from "components/OutlinedBtn/OutlinedBtn";
import { cn } from "utils/cn";

interface BurgerMenuProps {
  onClose: () => void;
}

function BurgerMenu({ onClose }: BurgerMenuProps) {
  const { userInfo, signOut } = useContext(UserContext);
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    setIsVisible(true);

    const handleEscKey = (event: globalThis.KeyboardEvent): void => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const handleClose = (): void => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>): void => {
    if ((e.target as HTMLDivElement).classList.contains("overlay")) {
      handleClose();
    }
  };

  const handleLinkClick = () => {
    handleClose();
  };

  return createPortal(
    <div
      className={cn(
        "overlay fixed inset-0 bg-black/30 md:hidden transition-opacity duration-300",
        {
          "opacity-0": !isVisible,
          "opacity-100": isVisible,
          dark: pathname == "/",
        }
      )}
      onClick={handleOverlayClick}
    >
      <div
        className={cn(
          "w-full bg-white py-4 dark:bg-background-dark transition-transform duration-300",
          {
            "-translate-y-40": !isVisible,
            "translate-y-0": isVisible,
          }
        )}
      >
        <div className="flex flex-col container gap-5 dark:text-text-contrast">
          <div className="flex justify-between">
            <Link
              to="/"
              className="font-robotoSlab text-[20px] font-bold leading-[24px] h-full flex items-center"
            >
              NewsExplorer
            </Link>
            <button onClick={handleClose}>
              <Icons.close className="w-6 h-6" />
            </button>
          </div>
          <Link to="/" className="leading-[56px]" onClick={handleLinkClick}>
            Home
          </Link>
          {userInfo.user && (
            <Link
              to="/saved-news"
              className="leading-[56px]"
              onClick={handleLinkClick}
            >
              Saved articles
            </Link>
          )}
          {userInfo.user ? (
            <OutlinedBtn
              className="md:ml-8 flex justify-center items-center gap-3"
              onClick={signOut}
            >
              {userInfo.user.name}
              <Icons.signOut className="w-6 h-6" />
            </OutlinedBtn>
          ) : (
            <OutlinedBtn
              className="md:ml-8 px-10 flex justify-center items-center"
              onClick={() => openModal("SIGNIN")}
            >
              Sign In
            </OutlinedBtn>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}

export default BurgerMenu;
