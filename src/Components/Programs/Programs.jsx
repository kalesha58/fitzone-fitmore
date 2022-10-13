import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text"> To Style You</span>
      </div>
      <div className="program-categories">
        {programsData.map((el) => (
          <div className="category">
            {el.image}
            <span>{el.id}</span>
            <span>{el.details}</span>
            <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
