import React, { useEffect, useState } from "react";
import { paths } from "../../constants/paths";
import { Link } from "react-router-dom";
import Button from "../base/Button";
import { toast } from "react-toastify";

const DynamicNav = () => {
  const [storageStatus, setStorageStatus] = useState(false);
  const [token, setToken] = useState("");
  const logoutHandler = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      console.log(token);
      localStorage.removeItem("access_token");
      setStorageStatus(false);
      console.log("Success");
      toast.success("Logout Successful");
    } else {
      toast.error("User needs to login");
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem("access_token"));
    console.log(token);
    console.log("Rendered");

    if (token) {
      setStorageStatus(true);
      console.log("token found");
    } else {
      setStorageStatus(false);
      console.log("token gone");
    }
  }, [storageStatus]);

  if (storageStatus === true) {
    setStorageStatus(false);
    return (
      <div>
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
