import { useState, ChangeEvent, FocusEvent } from "react";

type FormValues = { [key: string]: string };
type FormErrors = { [key: string]: string };

function useFormValidation(initialValues: FormValues) {
  const [formData, setFormData] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>(
    Object.keys(initialValues).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
  );

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

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => validateField(e.target);

  return {
    formData,
    errors,
    handleInputChange,
    handleBlur,
    setFormData,
  };
}

export default useFormValidation;
