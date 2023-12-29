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
import { useGetDepartmentsQuery } from "../../services/departments";
import { useGetRolesQuery } from "../../services/roles";
import { useCreateUserMutation } from "../../services/register";
import Loading from "../../components/base/Loading";

const SignUp = () => {
  const { data: rtkDepartments, isFetching: isFetchingDepartments } =
    useGetDepartmentsQuery();
  const { data: rtkRoles, isFetching: isFetchingRoles } = useGetRolesQuery();

  const [selectedDepartment, setSelectedDepartment] = useState(1);
  const [selectedRole, setSelectedRole] = useState(1);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    nickname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();

  const SignUpHandler = async (e) => {
    e.preventDefault();
    const { username, email, password, nickname } = currentUser;

    const signUpObj = {
      username,
      email,
      password,
      nickname,
      Department: +selectedDepartment,
      Role: +selectedRole,
    };

    createUser(signUpObj).then(() => {
      navigate("/login");
      toast.success("Registered Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
  };

  if (isFetchingDepartments && isFetchingRoles) {
    return <Loading />;
  }

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
            value={currentUser.username}
            onChange={(e) =>
              setCurrentUser((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
          />
          <input
            required
            type="email"
            minLength="7"
            maxLength="30"
            placeholder="Email"
            value={currentUser.email}
            onChange={(e) =>
              setCurrentUser((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          <input
            required
            type="password"
            minLength="7"
            maxLength="30"
            placeholder="Password"
            value={currentUser.password}
            onChange={(e) =>
              setCurrentUser((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
          <input
            required
            type="text"
            minLength="4"
            maxLength="30"
            placeholder="Nickname"
            value={currentUser.nickname}
            onChange={(e) =>
              setCurrentUser((prev) => ({
                ...prev,
                nickname: e.target.value,
              }))
            }
          />

          <select
            name="Department"
            id="dropdown"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {rtkDepartments?.map((data, index) => (
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
            {rtkRoles?.map((data, index) => (
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
