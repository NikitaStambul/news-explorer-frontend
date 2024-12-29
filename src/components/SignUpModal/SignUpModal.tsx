import ModalWithForm from "components/ModalWithForm/ModalWithForm";
import { useContext, useState } from "react";
import useFormValidation from "#/hooks/useFormValidation";
import { ModalContext } from "#/contexts/ModalContext/ModalContext";
import FormInput from "../ModalWithForm/FormInput";
import { UserContext } from "#/contexts/UserContext/UserContext";

function SignUpModal() {
  const [formError, setFormError] = useState("");
  const { openModal, closeModal } = useContext(ModalContext);
  const { signUp } = useContext(UserContext);
  const { formData, errors, handleInputChange, handleBlur } = useFormValidation(
    {
      email: "",
      password: "",
      name: "",
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signUp(formData);
      closeModal();
    } catch (err: unknown) {
      const error = err as Error;
      setFormError(error.message);
    }
  };

  return (
    <ModalWithForm
      title="Sign Up"
      submitBtnText="Sign Up"
      formErrorMessage={formError}
      onClose={closeModal}
      onSubmit={handleSubmit}
      altBtnEl={
        <button
          onClick={() => openModal("SIGNIN")}
          className="text-sm font-normal"
          type="button"
        >
          or <span className="text-button">Sign In</span>
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
        required
        minLength={6}
      />
      <FormInput
        error={errors.name}
        value={formData.name}
        valueTitle="name"
        onChange={handleInputChange}
        onBlur={handleBlur}
        required
        minLength={2}
        maxLength={20}
      />
    </ModalWithForm>
  );
}

export default SignUpModal;
