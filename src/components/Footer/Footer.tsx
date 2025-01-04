import Icons from "components/Icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container flex flex-col-reverse md:flex-row justify-between md:items-center py-5 mg:h-16 xl:h-20 gap-y-10">
      <p className="text-center font-normal text-text-muted leading-[22px]">
        © 2024 Supersite, Powered by News API
      </p>
      <div className="flex justify-between md:justify-stretch gap-x-10">
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-12">
          <Link to="/" className="font-normal text-lg">
            Home
          </Link>
          <a href="/" className="font-normal text-lg">
            TripleTen
          </a>
        </div>
        <div className="flex gap-6">
          <Icons.github className="w-6 h-6" />
          <Icons.facebook className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
