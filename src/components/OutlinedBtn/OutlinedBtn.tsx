import classNames from "classnames";

function OutlinedBtn({
  className,
  onClick,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={classNames(
        "px-10 h-12 rounded-full border-current border-[1px] text-[18px] font-medium leading-[24px]",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default OutlinedBtn;
