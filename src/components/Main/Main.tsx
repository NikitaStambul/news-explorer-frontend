import { useContext } from "react";
import BaseModal from "../BaseModal/BaseModal";
import ModalContext from "#/contexts/ModalContext/ModalContext";
import Preloader from "../Preloader/Preloader";

function Main() {
  const { openModal, closeModal, isModalOpen } = useContext(ModalContext);

  return (
    <div>
      Main
      <button onClick={() => openModal("test")}>Open Test Modal</button>
      {isModalOpen("test") && (
        <BaseModal onClose={() => closeModal("test")}>
          <Preloader />
        </BaseModal>
      )}
    </div>
  );
}

export default Main;
