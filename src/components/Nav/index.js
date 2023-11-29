import React from "react";
import { StyledNav } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import Button from "../base/Button";
import { paths } from "../../constants/paths";
const NavBar = () => {
  return (
    <StyledNav>
      <Link to={paths.home}>
        <img height="70px" width="70px" alt="logo" src={logo} />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
      </ul>
      <div>
        <Link to={paths.login}>
          <Button
            label="Login"
            type="submit"
            styles={{
              width: "100px",
              textDecoration: "none",
              padding: "1rem",
              marginRight: "20px",
              border: "none",
            }}
          />
        </Link>
        <Link to={paths.SignUp}>
          <Button
            label="Register"
            type="submit"
            styles={{
              width: "100px",
              textDecoration: "none",
              padding: "1rem",
              marginRight: "20px",
              border: "none",
            }}
          />
        </Link>
      </div>
    </StyledNav>
  );
};

export default NavBar;
