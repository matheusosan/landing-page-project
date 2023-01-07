import React from "react";
import * as S  from "./styles";
import Img1 from "../../assets/images/about/img1.png";
import Img2 from "../../assets/images/about/img2.png";
import Img3 from "./../../assets/images/about/img3.png";

const AboutUs = () => {
  return (
    <S.Container id="About">
      <S.ImagesContainer>
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
      </S.ImagesContainer>
      <S.Text>
        <span>About Us</span>
        <h2>
          Best Haircut Salon <br />
          For Men
        </h2>
        <p>
          Let your hairdressers do their amazing job. Trim the
          <br />
          hair to get your desired look. Book appointment with
          <br />
          us for your favorite hair Styles!
        </p>
        <button>Read More</button>
      </S.Text>
    </S.Container>
  );
};

export default AboutUs;
