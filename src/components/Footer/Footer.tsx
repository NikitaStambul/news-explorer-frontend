import Icons from "components/Icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container flex flex-col-reverse md:flex-row justify-between md:items-center py-5 mg:h-16 xl:h-20 gap-y-10">
      <p className="text-center font-normal text-text-muted leading-[22px]">
        © 2024 Supersite, Powered by News API
      </p>
      <nav className="flex justify-between md:justify-stretch gap-x-10">
        <ul className="flex flex-col md:flex-row gap-x-10 gap-y-12">
          <li>
            <Link to="/" className="font-normal text-lg">
              Home
            </Link>
          </li>
          <li>
            <a
              href="https://tripleten.com/"
              className="font-normal text-lg"
              target="_blank"
            >
              TripleTen
            </a>
          </li>
        </ul>
        <div className="flex gap-6">
          <a href="https://github.com/NikitaStambul" target="_blank">
            <Icons.github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/nik-stambul/" target="_blank">
            <Icons.linkedin className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
