import { navLinks } from "../Constants/NavBar";
import { Link } from "react-router-dom";
import "../ui/Hamburger.css";

const HamburgerMenu = () => {
  const showSideBar = () => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.style.transform = "translateX(0)";
  };
  const hideSideBar = () => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.style.transform = "translateX(100%)";
  };

  return (
    <div className="lg:hidden">
      <button className="hamburger" onClick={showSideBar}>
        <input type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </button>
      <nav id="sidebar" className="menu">
        <ul>
          <li>
            <button
              className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
              title="Go Back"
              onClick={hideSideBar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                className="stroke-gray-700/[80] transform rotate-180"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M11 6L5 12M5 12L11 18M5 12H19"
                ></path>
              </svg>
            </button>
          </li>
          {navLinks.map((link) => (
            <li key={link.display} className="pb-5" onClick={hideSideBar}>
              <Link to={link.link}>{link.display}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
