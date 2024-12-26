import ModalWithForm from "components/ModalWithForm/ModalWithForm";
import { useContext } from "react";
import useFormValidation from "#/hooks/useFormValidation";
import { ModalContext } from "#/contexts/ModalContext/ModalContext";
import FormInput from "../ModalWithForm/FormInput";

function SignUpModal() {
  const { openModal, closeModal } = useContext(ModalContext);
  const { formData, errors, handleInputChange, handleBlur } = useFormValidation(
    {
      email: "",
      password: "",
      name: "",
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add sign-in logic here
  };

  return (
    <ModalWithForm
      title="Sign In"
      submitBtnText="Sign In"
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
