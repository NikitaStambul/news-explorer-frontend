import { useState } from "react";

export default function useModalContext() {
  const [openedModal, setOpenedModal] = useState(null);

  const closeModal = () => {
    setOpenedModal(null);
  };

  return {
    openedModal,
    closeModal,
  };
}
