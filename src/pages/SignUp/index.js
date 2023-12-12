import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { hashPassword } from "../../components/base/Util";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [departments, setDepartments] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(1);
  const [selectedRole, setSelectedRole] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRolesAndDepartments = async () => {
      try {
        const rolesResponse = await fetch("http://localhost:3000/role");
        const departmentsResponse = await fetch(
          "http://localhost:3000/department"
        );

        if (rolesResponse.ok && departmentsResponse.ok) {
          const rolesData = await rolesResponse.json();
          const departmentsData = await departmentsResponse.json();

          const filteredRoles = rolesData.filter(
            (role) => role.name !== "admin"
          );

          setRoles(filteredRoles);
          setDepartments(departmentsData);
        } else {
          toast.error("Failed to fetch roles and departments");
        }
      } catch (error) {
        toast.error(`Failed: ${error.message}`);
      }
    };

    fetchRolesAndDepartments();
  }, []);

  const SignUpHandler = async (e) => {
    e.preventDefault();

    // const hashedPassword = await hashPassword(password);
    // console.log("Hashed Password:", hashedPassword);

    const signUpObj = {
      username,
      email,
      password,
      nickname,
      Department: selectedDepartment,
      Role: selectedRole,
    };

    console.log("Sign Up Object:", signUpObj);

    try {
      const response = await axios.post(
        "http://localhost:3000/user",
        signUpObj
      );

      if (response.status === 201) {
        console.log("success");
        console.log(signUpObj);
        navigate("/login");
        toast.success("Registered Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        console.log("Error:", response.data);
        toast.error("Failed to register");
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Failed to register");
    }
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
            minLength="3"
            maxLength="30"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            type="email"
            minLength="7"
            maxLength="30"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <input
            required
            type="text"
            minLength="4"
            maxLength="30"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <select
            name="Department"
            id="dropdown"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map((data, index) => (
              <option key={index} value={data.id}>
                {data.name}
              </option>
            ))}
          </select>

          <select
            name="Role"
            id="dropdown"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            {roles.map((data, index) => (
              <option key={index} value={data.id}>
                {data.name}
              </option>
            ))}
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
            marginTop: "2rem",
          }}
        />
      </RightSignUp>
    </StyledSignUp>
  );
};

export default SignUp;
