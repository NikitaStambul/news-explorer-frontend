import { ReactNode, useState } from "react";
import ModalContext from "./ModalContext";

type ModalProviderProps = {
  children: ReactNode;
};

function ModalProvider({ children }: ModalProviderProps): JSX.Element {
  const [modals, setModals] = useState<Record<string, boolean>>({});

  const openModal = (modalId: string) => {
    setModals((prev) => ({ ...prev, [modalId]: true }));
  };

  const closeModal = (modalId: string) => {
    setModals((prev) => ({ ...prev, [modalId]: false }));
  };

  const isModalOpen = (modalId: string) => !!modals[modalId];

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
