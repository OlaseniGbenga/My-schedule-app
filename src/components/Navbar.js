import { Link } from "react-router-dom";
import { useState } from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleNavClick() {
    setShowMenu((prevState) => !prevState);
  }

  return (
    <div>
      <div className="py-10 px-16 flex md:flex md:items-center md:justify-between">
        <div class={`min-[280px]:w-screen md:w-[100px] flex justify-between  items-center`}>
          <Link to="/">
            <FontAwesomeIcon
              icon={faHourglassHalf}
              className="text-c-white"
              size="2x"
            />
          </Link>

          <span
            onClick={handleNavClick}
            name="menu"
            class=" cursor-pointer mx-2 md:hidden block"
          >
            <FontAwesomeIcon
              name="menu"
              icon={faHamburger}
              className="text-c-white"
              size="2x"
            />
          </span>
        </div>

        <ul
          className={`${
            showMenu ? "flex flex-col absolute  left-8 top-[90px]" : "hidden"
          } md:flex md:items-center`}
        >
          <li className="mx-8 text-2xl font-black font-Roboto md:my-0">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-8 text-2xl font-black font-Roboto md:my-0">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
