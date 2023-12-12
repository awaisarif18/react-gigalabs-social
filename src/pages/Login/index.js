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
import { useDispatch } from "react-redux";
import { login } from "../../state/loggedStatus/statusSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loginUser = async (credentials) => {
    console.log("Login Credentials:", { username, password });

    return await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password,
    });

    if ("access_token" in response)
      try {
        toast.success("Login Succesful");
        console.log(response["user"]);
        localStorage.setItem("access_token", response["access_token"]);
        localStorage.setItem("user", JSON.stringify(response["user"]));
        dispatch(login());
        navigate("/");
      } catch (error) {
        console.log(error);
        toast.error("Login Failed", error);
      }
  };

  return (
    <StyledLogIn>
      <LeftLogIn onSubmit={handleSubmit}>
        <h1>{loginS}</h1>
        <h3>{loginM}</h3>

        <Icons />
        <p>OR</p>
        <input
          type="text"
          minLength="3"
          maxLength="30"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          minLength="7"
          maxLength="30"
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
