import React from "react";
import * as S from "./styles";
import Img from "../../assets/images/working/img.png";

const WorkingDays = () => {
  return (
    <S.WorkingSection id="WorkingDays">
      <S.WorkingContent>
        <img src={Img} alt="" />
        <S.WorkingText>
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
        </S.WorkingText>
      </S.WorkingContent>
    </S.WorkingSection>
  );
};

export default WorkingDays;
