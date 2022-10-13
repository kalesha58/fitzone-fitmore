import React from "react";
import { useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import "./Testimonial.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import {motion} from "framer-motion"

function Testimonals() {
  const [selected, setSelected] = useState(0);
  const test_Length = testimonialsData.length;
  const transition={type:"spring",duration:3}
  console.log('test_Length:', test_Length)
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What Type</span>
        <span>Say About Us</span>
        <motion.span
            key={selected}
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:100}}
            transition={transition}
        >{testimonialsData[selected].review}</motion.span>
        <span>
          <span style={{ color: `var(--orange)` }}>
            {testimonialsData[selected].name}
          </span>{" "}
          <span>- {testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.div
        initial={{opacity:0,x:100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.img 
         key={selected}
         initial={{opacity:0,x:200}}
         animate={{opacity:1,x:0}}
         exit={{opacity:0,x:-100}}
         transition={transition}
        src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            onClick={() =>
              selected === 0
                ? setSelected(test_Length - 1)
                : setSelected((prev) => prev - 1)
            }
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() =>
              selected === 0
                ? setSelected(test_Length - 1)
                : setSelected((prev) => prev + 1)
            }
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonals;
