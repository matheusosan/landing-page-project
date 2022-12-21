import React from "react";
import { Testimonials as TestimonialsSection } from "./styles";
import Julian from "./julian.jpg";
import Marie from "./marie.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <div>
        <h2>Testimonials</h2>
        <h3>
          What Our Clients
          <br /> Say About Us
        </h3>
        <p>
          Let your hairdressers do their amazing job. Trim the <br />
          hair to get your desired look. Book appointment with
          <br /> us for your favorite hair Styles!
        </p>
        <button>Give Reviews</button>
      </div>
      <div>
        <div className="user-reviews">
          <img src={Julian} alt="" />
          <p>
            It was an amazing experience to get services from the best in its
            profession Absolutly Enjoyed Every SEcond of it{" "}
          </p>
          <span>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
          <h2>Umar Usman</h2>
          <p>Regular User</p>
        </div>
        <div className="user-reviews">
          <img src={Marie} alt="" />
          <p>
            It was an amazing experience to get services from the best in its
            profession Absolutly Enjoyed Every SEcond of it{" "}
          </p>
          <span>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
          <h2>Rabia Khalil</h2>
          <p>Regular User</p>
        </div>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
