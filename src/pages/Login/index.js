import React, { useState } from "react";
import SideLogIn from "../../components/SideLogin";
import Icons from "../../components/Icons";
import { ForgotP, StyledLogIn } from "./styles";
import { LeftLogIn } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { loginM, loginS } from "../../constants";
import { toast } from "react-toastify";
import Button from "../../components/base/Button";
import { paths } from "../../constants/paths";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("proceed");
      await fetch(`http://localhost:8000/user?username=${username}`)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error("Please enter valid username");
          } else {
            const user = resp[0];
            if (user.password === password) {
              toast.success("Login Succesful");
              navigate("/");
            } else {
              toast.error("Please enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login falied due to :" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Email");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Your Password");
    }
    return result;
  };

  return (
    <StyledLogIn>
      <LeftLogIn onSubmit={loginHandler}>
        <h1>{loginS}</h1>
        <h3>{loginM}</h3>

        <Icons />
        <p>OR</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to={paths.ChangePassword}>
          <ForgotP>Forgot Password?</ForgotP>
        </Link>
        <Button
          label="Sign In"
          type="submit"
          styles={{
            textDecoration: "none",
            padding: "1rem 5rem",
            borderRadius: "25px",
            border: "none",
          }}
        />
      </LeftLogIn>
      <SideLogIn
        title="New Here?"
        description="Sign Up and discover a great amount of new opportunities!"
        buttonContent="Sign Up"
      />
    </StyledLogIn>
  );
};

export default Login;
