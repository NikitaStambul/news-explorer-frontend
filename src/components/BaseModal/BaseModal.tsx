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
        "overlay pt-14 md:pt-0 height-dvh fixed inset-0 flex md:items-center md:justify-center bg-black/30 transition-opacity duration-300 ease-in-out",
        { "opacity-1": isVisible, "opacity-0": !isVisible }
      )}
      onClick={handleOverlayClick}
    >
      <div
        className={classNames(
          "relative p-4 md:p-9 md:top-auto rounded-t-xl md:rounded-2xl w-full height-full md:max-w-lg bg-white transition-transform duration-300 ease-in-out",
          {
            "translate-y-0 md:scale-100": isVisible,
            "translate-y-24 md:translate-y-0 md:scale-90": !isVisible,
          },
          className
        )}
      >
        {children}
        <button
          className="absolute -top-10 md:-top-12 right-4 md:-right-12 bg-transparent w-6 h-6 md:w-10 md:h-10 border-none cursor-pointer dark"
          onClick={handleClose}
        >
          <Icons.close className="w-6 h-6" />
        </button>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default BaseModal;
