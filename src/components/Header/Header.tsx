import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-14 md:h-16 lg:h-20 container flex">
      <Link
        to="/"
        className="font-robotoSlab text-[20px] font-bold leading-[24px] h-full flex items-center"
      >
        NewsExplorer
      </Link>
    </header>
  );
}

export default Header;
