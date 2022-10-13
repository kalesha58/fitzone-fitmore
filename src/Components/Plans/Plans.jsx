import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png"

function Plans() {
  return (
    <div>
      <div className="plans-container">
        <div className="blur plans_blur_1"></div>
        <div className="blur plans_blur_2"></div>
        <div className="programs-header">
          <span className="stroke-text">READY TO START</span>
          <span>YOUR JOURNEY</span>
          <span className="stroke-text">NOW WITHUS</span>
        </div>
        {/* Plans Card */}

        <div className="plans">
          {plansData.map((plan, i) => (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>${plan.price}</span>
               <div className="features">
                {plan.features.map((feature,i)=>(
                    <div className="feature">

                    <img src={whiteTick} alt="" />
                    <span key={i}>{feature}</span>
                    </div>
                ))}

               </div>

               {/* join now button */}
               <div>
                <span>See More benifits---></span>
               </div>
               <button className="btn">Join Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;
