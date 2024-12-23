import { useCallback, useState } from "react";
import { ModalContext, ModalType } from "./ModalContext";

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentModal, setCurrentModal] = useState<ModalType>(null);

  const openModal = useCallback((modalType: ModalType) => {
    setCurrentModal(modalType);
  }, []);

  const closeModal = useCallback(() => {
    setCurrentModal(null);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        currentModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
