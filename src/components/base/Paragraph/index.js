import React from "react";
import { StyledParagraph } from "./style";

const GParagraph = ({ content }) => {
  return (
    <StyledParagraph>
      <p>{content}</p>
    </StyledParagraph>
  );
};

export default GParagraph;
