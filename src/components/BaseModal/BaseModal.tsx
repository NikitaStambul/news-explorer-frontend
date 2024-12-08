import React, { useEffect, useState, MouseEvent } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import Icons from "../Icons";

interface BaseModalProps {
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const BaseModal: React.FC<BaseModalProps> = ({
  onClose,
  children,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

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

  return createPortal(
    <div
      className={classNames(
        "overlay fixed inset-0 flex justify-center items-center bg-black/30 p-6 transition-opacity duration-300 ease-in-out",
        { "opacity-1": isVisible, "opacity-0": !isVisible }
      )}
      onClick={handleOverlayClick}
    >
      <div
        className={classNames(
          "relative bg-white rounded-2xl w-full max-w-lg transform transition-transform duration-300 ease-in-out",
          { "scale-100": isVisible, "scale-90": !isVisible },
          className
        )}
      >
        {children}
        <button
          className="absolute -top-12 -right-12 bg-transparent w-10 h-10 border-none cursor-pointer transition-opacity duration-300 opacity-70 hover:opacity-100 bg-center bg-no-repeat"
          onClick={handleClose}
        >
          <Icons.close />
        </button>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default BaseModal;
