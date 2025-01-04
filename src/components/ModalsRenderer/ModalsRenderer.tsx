import { useContext } from "react";
import SignInModal from "components/SignInModal/SignInModal";
import { ModalContext } from "contexts/ModalContext/ModalContext";
import SignUpModal from "components/SignUpModal/SignUpModal";

function ModalsRenderer() {
  const { currentModal } = useContext(ModalContext);

  if (!currentModal) return null;

  return (
    <>
      {currentModal === "SIGNIN" && <SignInModal />}
      {currentModal === "SIGNUP" && <SignUpModal />}
    </>
  );
}

export default ModalsRenderer;
