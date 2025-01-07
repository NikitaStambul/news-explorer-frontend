import { useContext } from "react";
import SignInModal from "components/SignInModal/SignInModal";
import { ModalContext } from "contexts/ModalContext/ModalContext";
import SignUpModal from "components/SignUpModal/SignUpModal";
import RegistrationSuccessModal from "components/RegistrationSuccessModal/RegistrationSuccessModal";

function ModalsRenderer() {
  const { currentModal } = useContext(ModalContext);

  if (!currentModal) return null;

  return (
    <>
      {currentModal === "SIGNIN" && <SignInModal />}
      {currentModal === "SIGNUP" && <SignUpModal />}
      {currentModal === "REGISTERATION_SUCCESS" && <RegistrationSuccessModal />}
    </>
  );
}

export default ModalsRenderer;
