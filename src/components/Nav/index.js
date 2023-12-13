import React from "react";
import { StyledNav } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import { paths } from "../../constants/paths";
import DynamicNav from "../dynamic nav";

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
      <DynamicNav />
    </StyledNav>
  );
};

export default NavBar;
