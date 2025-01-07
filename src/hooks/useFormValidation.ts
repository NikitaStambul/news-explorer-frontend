import { useState, ChangeEvent, FocusEvent } from "react";

type FormErrors<T> = Partial<Record<keyof T, string>>;

function useFormValidation<T extends Record<string, any>>(initialValues: T) {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateField = (field: HTMLInputElement) => {
    if (!field.validity.valid) {
      setErrors((prev) => ({
        ...prev,
        [field.name]: field.validationMessage,
      }));
    } else {
      setErrors((prev) => ({ ...prev, [field.name]: "" }));
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) =>
    validateField(e.target);

  return {
    formData,
    errors,
    handleInputChange,
    handleBlur,
    setFormData,
  };
}

export default useFormValidation;
