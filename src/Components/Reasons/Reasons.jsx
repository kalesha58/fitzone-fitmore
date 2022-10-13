import React from "react";
import "./Reasons.css";
import tick from "../../assets/tick.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"

function Reasons() {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> Choose Us ?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="" />
          
            <span>TRAIN SHARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
         
            <span>FREE PROGRAM FOR NEW MEMBERS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PATNERS</span>
          </div>
        </div>
        <span style={{color:"var(--grey)"}}>OUR PATNERS</span>
        <div className="patners">

        <img src={nb} alt="" />
        <img src={adidas} alt="" />
        <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
