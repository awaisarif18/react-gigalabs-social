import React, { useState } from "react";
import { ForgotContainer } from "./styles";
import { remember } from "../../constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const newPasswordHandler = async (e) => {
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
            toast.error("Please enter a valid username");
          } else {
            const user = resp[0];
            if (user.nickname === nickname) {
              // Update the user's password
              const updatedUser = { ...user, password: newPassword };

              //PUT request to update the user's data
              fetch(`http://localhost:8000/user/${user.id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUser),
              })
                .then((res) => {
                  if (res.ok) {
                    navigate("/");
                    toast.success("Password updated successfully");
                  } else {
                    toast.error("Failed to update password");
                  }
                })
                .catch((err) => {
                  toast.error("Failed to update password: " + err.message);
                });
            } else {
              toast.error("Invalid nickname");
            }
          }
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Email");
    }
    if (newPassword === "" || newPassword === null) {
      result = false;
      toast.warning("Please Enter Your New Password");
    }
    if (nickname === "" || nickname === null) {
      result = false;
      toast.warning("Please Enter Your Nickname");
    }
    return result;
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
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <button type="submit">Change Password</button>
    </ForgotContainer>
  );
};

export default ForgotPassword;
