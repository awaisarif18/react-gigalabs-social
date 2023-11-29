import React from "react";
import { Overlay, StyledCard } from "./styledCard";
import { fadeInAnim } from "../../../Animation/animation";
import Heading2 from "../../../components/base/Heading2.js";

const Card = ({ title, description, image }) => {
  return (
    <StyledCard
      myimage={image}
      variants={fadeInAnim}
      initial="hidden"
      whileInView="show"
    >
      <Overlay>
        <div>
          <Heading2 content={title} />
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </Overlay>
    </StyledCard>
  );
};

export default Card;
