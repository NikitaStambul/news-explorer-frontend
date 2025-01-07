import { cn } from "utils/cn";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  error?: string;
  valueTitle: string;
}

function FormInput({
  error,
  value,
  valueTitle,
  ...inputProps
}: FormInputProps) {
  return (
    <label
      className={cn(
        "text-button flex flex-col font-normal border-b-[1px] cursor-pointer",
        {
          "border-red-500": error,
        }
      )}
      htmlFor={valueTitle}
    >
      {valueTitle[0].toUpperCase() + valueTitle.slice(1)}
      {error && <span className="text-red-500">{`(${error})`}</span>}
      <input
        className={cn("text-text py-[10px]", {
          "text-red-500": error,
        })}
        type={valueTitle}
        name={valueTitle}
        id={valueTitle}
        placeholder={`Enter ${valueTitle}`}
        value={value}
        {...inputProps}
      />
    </label>
  );
}
export default FormInput;
