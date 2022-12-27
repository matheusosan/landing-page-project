import React from "react";
import { WorkingSection, WorkingContent, WorkingText } from "./styles";
import Img from "../../assets/images/working/img.png";

const WorkingDays = () => {
  return (
    <WorkingSection>
      <WorkingContent>
        <img src={Img} alt="" />
        <WorkingText>
          <h2>WORKING DAYS</h2>
          <p>We are open on all six days in a week </p>

          <div>
              <h2>Monday</h2>
              <p>9Am to 10pm</p>
          </div>

          <div>
              <h2>Friday</h2>
              <p>9Am to 10pm</p>
          </div>

          <button>Book Now</button>
        </WorkingText>
      </WorkingContent>
    </WorkingSection>
  );
};

export default WorkingDays;
