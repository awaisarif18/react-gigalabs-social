import React from "react";
import { About, Description, WebAnimation } from "./styles";
import { getTouch } from "../../../constants";
import Button from "../../../components/base/Button";
import Lottie from "lottie-react";
import webAnimation from "../../../assets/Animation - 01.json";
import { fadeInAnim, pageAnimation } from "../../../Animation/animation";
import Heading2 from "../../../components/base/Heading2.js";

const AboutUs = () => {
  return (
    <About
      variants={pageAnimation}
      initial="hidden"
      whileInView="show"
      exit="exit"
    >
      <Description variants={fadeInAnim} initial="hidden" animate="show">
        <Heading2 content="We work to make" />
        <h2>
          your <span>dream</span> come
        </h2>
        <Heading2 content="true." />

        <div>
          <p>{getTouch}</p>
        </div>

        <div>
          <Button
            label="Contact Us"
            onClick={() => (window.location = "mailto:m.awaisarif17@gmail.com")}
          />
        </div>
      </Description>

      <WebAnimation variants={fadeInAnim} initial="hidden" animate="show">
        <Lottie animationData={webAnimation} />
      </WebAnimation>
    </About>
  );
};

export default AboutUs;
