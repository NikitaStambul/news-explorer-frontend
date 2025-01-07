import { Link, LinkProps, useLocation } from "react-router-dom";

function NavigationLink({ children, ...props }: LinkProps) {
  const { pathname } = useLocation();
  const isActive = pathname === props.to

  return (
    <Link
      {...props}
      className="relative font-roboto text-[16px] font-medium leading-[24px] h-full flex items-center px-4"
    >
      {children}
      {isActive && <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-current"></div>}
    </Link>
  );
}
export default NavigationLink;
