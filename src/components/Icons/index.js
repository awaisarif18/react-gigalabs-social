import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUsers,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { StyledIcons } from "./style";

const Icons = () => {
  return (
    <Link to="https://www.youtube.com/@MuhammadAwaisArif">
      <StyledIcons>
        <FontAwesomeIcon icon={faEnvelope} size="2xl" />
        <FontAwesomeIcon icon={faUsers} size="2xl" />
        <FontAwesomeIcon icon={faRetweet} size="2xl" />
      </StyledIcons>
    </Link>
  );
};

export default Icons;
