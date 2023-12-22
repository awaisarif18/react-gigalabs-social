import React, { useState } from "react";
import { ForgotContainer } from "./styles";
import { remember } from "../../constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useChangePasswordMutation } from "../../services/changePassword";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [changePassword] = useChangePasswordMutation();

  const updateObj = {
    username,
    nickname,
    password,
  };

  const newPasswordHandler = async (e) => {
    e.preventDefault();

    changePassword({ username, updateObj })
      .then(() => {
        navigate("/");
        toast.success("Password updated successfully");
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };

  return (
    <ForgotContainer onSubmit={newPasswordHandler}>
      <h1>{remember}</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Change Password</button>
    </ForgotContainer>
  );
};

export default ForgotPassword;
