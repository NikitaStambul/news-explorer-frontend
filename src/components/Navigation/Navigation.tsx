import { useContext, useState } from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Icons from "../Icons";
import OutlinedBtn from "../OutlinedBtn/OutlinedBtn";
import { ModalContext } from "#/contexts/ModalContext/ModalContext";

function Navigation() {
  const { openModal } = useContext(ModalContext);
  const [menuIsOnened, setMenuIsOnened] = useState(false);

  const handleMenuBtnClick = () => {
    setMenuIsOnened((isOpened) => !isOpened);
  };

  const handleBurgerMenuClose = () => {
    setMenuIsOnened(false);
  };

  return (
    <nav className="flex h-full items-center">
      <div className="hidden md:flex h-full items-center">
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/saved-news">Saved articles</NavigationLink>
        <OutlinedBtn className="ml-8" onClick={() => openModal("SIGNIN")}>
          Sign In
        </OutlinedBtn>
      </div>
      <button className="w-6 h-6 block md:hidden" onClick={handleMenuBtnClick}>
        <Icons.menu />
      </button>
      {menuIsOnened && <BurgerMenu onClose={handleBurgerMenuClose} />}
    </nav>
  );
}

export default Navigation;
