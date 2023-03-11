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
      <div className="py-10 px-16 flex md:flex md:items-center md:justify-between ">
        <div class={`min-[280px]:w-screen md:w-[100px] flex justify-between  items-center`}>
          <Link to="/" className="z-[2]">
            <FontAwesomeIcon
              icon={faHourglassHalf}
              className="text-c-white "
              size="2x"
            />
          </Link>

          <span
            onClick={handleNavClick}
            name="menu"
            class=" cursor-pointer mx-2 md:hidden block z-[2]"
          >
            <FontAwesomeIcon
              name="menu"
              icon={faHamburger}
              className="text-c-white ]"
              size="2x"
            />
          </span>
        </div>

        <ul
          className={`${
            showMenu ? "flex flex-col absolute  left-8 top-[90px]" : "hidden"
          } md:flex md:items-center z-[2]`}
        >
          <li className="mx-8 text-2xl font-black font-Roboto md:my-0">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-8 text-2xl font-black font-Roboto md:my-0">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>

       {showMenu && <div className="h-screen w-screen bg-c-blue z-[1] fixed top-0 bottom-0 left-0 right-0"></div>} 
      </div>
    </div>
  );
}
