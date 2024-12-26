import ModalWithForm from "components/ModalWithForm/ModalWithForm";
import { useContext } from "react";
import useFormValidation from "#/hooks/useFormValidation";
import { ModalContext } from "#/contexts/ModalContext/ModalContext";
import FormInput from "../ModalWithForm/FormInput";
import { UserContext } from "#/contexts/UserContext/UserContext";
import { SignInData } from "#/types/auth";

function SignInModal() {
  const { openModal, closeModal } = useContext(ModalContext);
  const { signIn } = useContext(UserContext);
  const { formData, errors, handleInputChange, handleBlur } =
    useFormValidation<SignInData>({
      email: "",
      password: "",
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signIn(formData);
  };

  return (
    <ModalWithForm
      title="Sign In"
      submitBtnText="Sign In"
      onClose={closeModal}
      onSubmit={handleSubmit}
      altBtnEl={
        <button
          onClick={() => openModal("SIGNUP")}
          className="text-sm font-normal"
          type="button"
        >
          or <span className="text-button">Sign Up</span>
        </button>
      }
    >
      <FormInput
        error={errors.email}
        value={formData.email}
        valueTitle="email"
        onChange={handleInputChange}
        onBlur={handleBlur}
        required
      />
      <FormInput
        error={errors.password}
        value={formData.password}
        valueTitle="password"
        onChange={handleInputChange}
        onBlur={handleBlur}
        minLength={6}
        required
      />
    </ModalWithForm>
  );
}

export default SignInModal;
