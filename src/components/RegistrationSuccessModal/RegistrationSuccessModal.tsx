import BaseModal from "components/BaseModal/BaseModal";
import { ModalContext } from "contexts/ModalContext/ModalContext";
import { useContext } from "react";

function RegistrationSuccessModal() {
  const { openModal, closeModal } = useContext(ModalContext);

  const handleSignInClick = () => {
    openModal("SIGNIN");
  };

  return (
    <BaseModal onClose={closeModal} className="flex flex-col gap-3 items-start">
      <h2 className="font-black text-2xl leading-[24px]">
        Registration successfully completed!
      </h2>
      <button
        onClick={handleSignInClick}
        className="font-inter text-lg leading-[22px] text-button hover:text-button-hover"
      >
        Sign In
      </button>
    </BaseModal>
  );
}

export default RegistrationSuccessModal;
