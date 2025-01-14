import { cn } from "utils/cn";
import { ButtonHTMLAttributes } from "react";

interface BookmarkBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isBookmarked: boolean;
}

function BookmarkBtn({ isBookmarked, className, ...rest }: BookmarkBtnProps) {
  return (
    <button
      className={cn("group", className)}
      aria-label="Toggle bookmark"
      {...rest}
    >
      <svg
        width="40"
        height="40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="8" className="fill-white" />
        <path
          d="M19.382 23.714 14 27.943V12h12v15.942l-5.382-4.228-.618-.486-.618.486Z"
          className={cn("transition-colors duration-300 ease-in-out", {
            "fill-button stroke-button group-hover:fill-button-hover group-hover:stroke-button-hover":
              isBookmarked,
            "fill-transparent stroke-text-muted group-hover:stroke-text":
              !isBookmarked,
          })}
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}

export default BookmarkBtn;
