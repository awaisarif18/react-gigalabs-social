import React from "react";
import { StyledGImage } from "./style";
import { fadeInAnim } from "../../../Animation/animation";

const GImage = ({ source, alternate }) => {
  return (
    <StyledGImage variants={fadeInAnim} initial="hidden" whileInView="show">
      <img src={source} alt={alternate} />
    </StyledGImage>
  );
};

export default GImage;
