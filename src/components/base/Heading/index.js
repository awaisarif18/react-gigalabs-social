import React from "react";
import { Header } from "./style";

const Heading = ({ content }) => {
  return (
    <Header>
      <h1>{content}</h1>
      <div className="line"></div>
    </Header>
  );
};

export default Heading;
