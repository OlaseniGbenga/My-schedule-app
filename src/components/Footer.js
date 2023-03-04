import { Link } from "react-router-dom";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className=" border-c-blue py-10 px-16 bg-c-blue  flex flex-col items-center gap-y-4">
      <Link to="/">
        <FontAwesomeIcon
          icon={faHourglassHalf}
          className="text-c-white pb-2"
          size="2x"
        />
      </Link>
      <h3 className="font-Roboto text-black text-2xl font-bold">Follow Me</h3>
      <div className="flex gap-x-4">
        {" "}
        <a
          href="https://www.instagram.com/buns_media/"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-c-white"
            size="2x"
          />
        </a>
        <a href="https://twitter.com/OlaseniGbenga1" rel="noreferrer" target="_blank"><FontAwesomeIcon
          icon={faTwitter}
          className="text-c-white"
          size="2x"
        /></a>
        <a href="https://www.linkedin.com/in/gbenga-olaseni-623b0319a/" rel="noreferrer" target="_blank"><FontAwesomeIcon
          icon={faLinkedin}
          className="text-c-white"
          size="2x"
        /></a>
      </div>
      <h6 className="text-center"> copyright&copy; 2023 All rights reserved </h6>
    </div>
  );
}
