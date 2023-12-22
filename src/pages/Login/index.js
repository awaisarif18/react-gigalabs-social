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
import { useAuthenticateUserMutation } from "../../services/login";
import { setUser } from "../../state/userData/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authenticateUser] = useAuthenticateUserMutation();

  const loginUser = async (credentials) => {
    try {
      authenticateUser(credentials).then((originalPromiseResult) => {
        localStorage.setItem(
          "access_token",
          originalPromiseResult.data.access_token
        );

        dispatch(setUser(originalPromiseResult.data.user));

        dispatch(login());
        navigate("/");
      });
    } catch (error) {
      console.error("Error: ", error);
      toast.error("Incorrect Username or Password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser({
      username,
      password,
    });
  };

  return (
    <StyledLogIn>
      <LeftLogIn onSubmit={handleSubmit}>
        <h1>{loginS}</h1>
        <h3>{loginM}</h3>

        <Icons />
        <p>OR</p>
        <input
          required
          type="text"
          minLength="3"
          maxLength="30"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
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
