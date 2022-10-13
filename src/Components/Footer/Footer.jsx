import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";

import Linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer_container">
      <hr />
      <div className="footer">
        <div className="social_links">

        <img src={Github} alt="" />
        <img src={Linkedin} alt="" />
        <img src={Instagram} alt="" />
      </div>
      <div className="logo_footer">
         <img src={Logo} alt="" />
      </div>
        </div>
    <div className="blur blur_f_1">

    </div>
    <div className="blur blur_f_2">
      
    </div>
    </div>
  );
}

export default Footer;
