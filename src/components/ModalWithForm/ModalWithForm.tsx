import { FormEventHandler, useRef, useState } from "react";
import BaseModal from "components/BaseModal/BaseModal";
import { cn } from "utils/cn";

interface ModalWithFormProps {
  onClose: () => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
  formErrorMessage: string;
  children: React.ReactNode;
  title?: string;
  submitBtnText?: string;
  altBtnEl: React.ReactNode;
}

function ModalWithForm({
  onClose,
  onSubmit,
  formErrorMessage,
  children,
  title = "Form",
  submitBtnText = "Submit",
  altBtnEl,
}: ModalWithFormProps) {
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = () => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  };

  return (
    <BaseModal onClose={onClose}>
      <h2 className="font-roboto text-2xl font-black leading-7 mb-5">
        {title}
      </h2>
      <form
        className="flex flex-col gap-8"
        ref={formRef}
        onSubmit={onSubmit}
        onChange={handleChange}
        onInput={handleChange}
      >
        {children}
        <div className="flex flex-col gap-4">
          {formErrorMessage && (
            <p className="font-inter text-xs text-red-500 text-center">
              {formErrorMessage}
            </p>
          )}
          <button
            className={cn(
              "w-full rounded-full text-text-contrast bg-button p-5 text-lg font-medium leading-6 cursor-pointer disabled:cursor-not-allowed disabled:bg-button-disabled disabled:text-text-muted",
              { "shadow-submit": isFormValid }
            )}
            type="submit"
            disabled={!isFormValid}
          >
            {submitBtnText}
          </button>
          {altBtnEl}
        </div>
      </form>
    </BaseModal>
  );
}

export default ModalWithForm;
