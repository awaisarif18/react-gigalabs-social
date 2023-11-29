import React, { useState } from "react";
import SideLogIn from "../../components/SideLogin";
import Icons from "../../components/Icons";
import { StyledSignUp } from "./styles";
import { RightSignUp } from "./styles";
import { InputContainer } from "./styles";
import { signUpM } from "../../constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/base/Button";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const SignUpHandler = async (e) => {
    e.preventDefault();

    const signUpObj = { username, nickname, email, password, department, role };

    await fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpObj),
    })
      .then((res) => {
        navigate("/login");
        toast.success("Registered Succesfully !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        toast.error("Failed :", err.message);
      });
  };

  return (
    <StyledSignUp>
      <SideLogIn
        title="One Of Us?"
        description={`If you already have an account, just sign in. We've missed you!`}
        buttonContent="Sign In"
      />

      <RightSignUp onSubmit={SignUpHandler}>
        <h1>{signUpM}</h1>
        <h3>{signUpM}</h3>
        <Icons />
        <p>OR</p>
        <InputContainer>
          <input
            required
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

          <select
            name="Role"
            id="role-dropdown"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Developer</option>
            <option>Project Manager</option>
          </select>
        </InputContainer>

        <Button
          label="Register"
          type="submit"
          styles={{
            textDecoration: "none",
            padding: "1rem 5rem",
            borderRadius: "25px",
            border: "none",
          }}
        />
      </RightSignUp>
    </StyledSignUp>
  );
};

export default SignUp;
