import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"
 

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <br></br>
        <span>y.barhate111@gmail.com</span>
        <span>© 2023 yash-dev. Crafted with ❤️ by Yash in React.</span>
        <div className="f-icons">
         
          <a href="https://github.com/yash-dev-111"><Gitub color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/yashab111/"><Linkedin color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
