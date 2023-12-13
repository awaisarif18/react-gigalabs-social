import React from "react";
import { paths } from "../../constants/paths";
import { Link } from "react-router-dom";
import Button from "../base/Button";
import { toast } from "react-toastify";
import useUser from "../../Hooks/useUser";
import { useDispatch } from "react-redux";
import { logout } from "../../state/loggedStatus/statusSlice";
import { useNavigate } from "react-router-dom";

const DynamicNav = () => {
  const isLogged = useUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log("isLogged", isLogged);

  const logoutHandler = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      // console.log(token);
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");

      dispatch(logout());
      navigate("/");

      console.log("Success");
      toast.success("Logout Successful");
    } else {
      toast.error("User needs to login");
    }
  };

  if (isLogged) {
    return (
      <div>
        <Link to={paths.profile}>
          <Button
            label="Profile"
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
      </div>
    );
  } else {
    return (
      <div>
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
      </div>
    );
  }
};

export default DynamicNav;
