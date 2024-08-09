import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import PropTypes from "prop-types";
import { navLinks } from "../Constants/NavBar";

const Navbar = ({ currentPath }) => {
  const logoSrc = currentPath === "/Magazine" ? "/2.png" : "/1.png";

  return (
    <header className="py-5 px-5 w-[100vw]">
      <nav className="sticky top-0 flex justify-between items-center h-24 z-10">
        <Link to="/">
          <img
            src={logoSrc}
            alt="logo"
            width={129}
            height={129}
            className="m-0 w-[200px] h-[200px]"
          />
        </Link>
        <ul className="flex-1 flex justify-end items-center gap-10 max-lg:hidden rounded-full">
          {navLinks.map((link) => (
            <li key={link.display} className="cursor-pointer font-medium whitespace-nowrap">
              <Link to={link.link}>
                {link.display}
              </Link>
            </li>
          ))}
        </ul>
        <HamburgerMenu />
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  currentPath: PropTypes.string.isRequired,
};

export default Navbar;
