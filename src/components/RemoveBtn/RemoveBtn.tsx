import { cn } from "utils/cn";
import { ButtonHTMLAttributes } from "react";

function RemoveBtn({
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // TODO: REMOVE LOGIC
  };

  return (
    <button
      onClick={handleClick}
      className={cn("group", className)}
      aria-label="Remove article from saved"
      {...rest}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="8" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23 11H17V13H11V15H29V13H23V11ZM13 17V28C13 29.1046 13.8954 30 15 30H25C26.1046 30 27 29.1046 27 28V17H25V28H15V17H13ZM17 17L17 26H19L19 17H17ZM21 17V26H23V17H21Z"
          className="transition-colors duration-300 ease-in-out fill-text-muted group-hover:fill-text"
        />
      </svg>
    </button>
  );
}

export default RemoveBtn;
