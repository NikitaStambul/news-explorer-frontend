import { createContext } from "react";

type ModalContextType = {
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  isModalOpen: (modalId: string) => boolean;
};

const ModalContext = createContext<ModalContextType>({
  openModal: () => {
    throw new Error("openModal must be used within a ModalProvider");
  },
  closeModal: () => {
    throw new Error("closeModal must be used within a ModalProvider");
  },
  isModalOpen: () => {
    throw new Error("isModalOpen must be used within a ModalProvider");
  },
});

export default ModalContext;
