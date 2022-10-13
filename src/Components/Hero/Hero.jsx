import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
// import hero_back from "../assets/hero_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCouter from "number-counter"
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile=window.innerWidth<=768?true:false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* BEST ADD */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile?"165px" :"238px"}}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The Best Fitnes Club In The Town</span>
        </div>
        {/*   BEST ADD-END */}
        {/* HERO HEADING */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In Here We will help you to Shape and build your ideal Body and
              live up your lifr to fullest
            </span>
          </div>
        </div>
        {/* HERO HEADING-END  */}

        {/* figures  */}
        <div className="figures">
          <div>
            <span>
<NumberCouter end={140} start={100} delay='4' preFix="+"/>

            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
            <NumberCouter end={978} start={800} delay='4' preFix="+"/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
            <NumberCouter end={50} start={0} delay='4' preFix="+"/>
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* figures-END */}

        {/* Hero-button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        {/* Hero-button-END */}
      </div>
      <div className="right-h">
        {/*join and hearrat  */}
        <button className="btn">Join Now</button>
        <motion.div
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart rate</span>
          <span> 116 BPM</span>
        </motion.div>
        {/* join and hearrate end */}
        {/* Hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          transition={transition}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          src={hero_image_back}
          alt=""
          className="hero_image_back"
        />
        {/* caleries */}
        <motion.div
          transition={transition}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
