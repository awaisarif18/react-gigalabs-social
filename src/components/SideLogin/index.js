import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../constants/paths";
import { RightLogIn } from "./style";

const SideLogIn = ({ title, description, buttonContent }) => {
  return (
    <RightLogIn>
      <h1>{title}</h1>
      <h3>{description}</h3>
      {buttonContent === "Sign Up" ? (
        <Link to={paths.SignUp}>
          <button>{buttonContent}</button>
        </Link>
      ) : (
        <Link to={paths.login}>
          <button>{buttonContent}</button>
        </Link>
      )}
    </RightLogIn>
  );
};

export default SideLogIn;
