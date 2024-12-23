import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="h-14 md:h-16 xl:h-20 shadow-header-gray dark:text-text-contrast">
      <div className="container h-full flex justify-between items-center">
        <Link
          to="/"
          className="font-robotoSlab text-[20px] font-bold leading-[24px] h-full flex items-center"
        >
          NewsExplorer
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
