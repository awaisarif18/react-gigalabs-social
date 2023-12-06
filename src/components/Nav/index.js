import React, { useContext } from "react";
import { StyledNav } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import Button from "../base/Button";
import { paths } from "../../constants/paths";
import { toast } from "react-toastify";
import DynamicNav from "../dynamic nav";

// const logoutHandler = () => {
//   const token = localStorage.getItem("access_token");
//   if (token) {
//     console.log(token);
//     localStorage.removeItem("access_token");
//     console.log("Success");
//     toast.success("Logout Successful");
//   } else {
//     toast.error("User needs to login");
//   }
// };

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
      {/* <div>
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

        <Button
          func={logoutHandler}
          label="Logout"
          styles={{
            width: "100px",
            textDecoration: "none",
            padding: "1rem",
            marginRight: "20px",
            border: "none",
          }}
        />
      </div> */}
    </StyledNav>
  );
};

export default NavBar;
