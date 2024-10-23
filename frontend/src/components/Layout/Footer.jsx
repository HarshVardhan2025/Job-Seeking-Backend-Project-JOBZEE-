import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved</div>
      <div>
        <Link to={"https://github.com/namanr25"} target="_blank">
          <FaGithubSquare />
        </Link>
        <Link to={"https://www.linkedin.com/in/naman-rastogi-4a761b1b8/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;