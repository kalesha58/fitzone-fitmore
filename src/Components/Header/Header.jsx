import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
// import Logo from '../../assets/lo'
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [meunopen, setMenuopen] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {meunopen == false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuopen(true)}
        >
          {" "}
          <img
            src={Bars}
            alt=""
            style={{
              width: "1.5rem",
              height: "1.5rem",
              position: "relative",
              top: "0px",
            }}
          />{" "}
        </div>
      ) : (
        <ul className="header-menu">
          <li >
            <Link
            onClick={() => setMenuopen(false)}
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            >Home</Link>
          </li>
          <li >
          <Link
            onClick={() => setMenuopen(false)}
            to="programs"
            spy={true}
            smooth={true}
            >Programs</Link>
          </li>
          <li >
            <Link  
            onClick={() => setMenuopen(false)}
               to="reasons"
               spy={true}
               smooth={true}
            >
            Why Us
            </Link>
            </li>
          <li >

            <Link 
              onClick={() => setMenuopen(false)}
             to="reasons"
             spy={true}
             smooth={true}>
            Plans</Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuopen(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
