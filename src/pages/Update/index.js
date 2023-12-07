import React, { useState, useEffect } from "react";
import { StyledInput, UpdateForm } from "./style";
import { toast } from "react-toastify";
import Button from "../../components/base/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../state/loggedStatus/statusSlice";

const UpdateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [departments, setDepartments] = useState([]);
  const [roles, setRoles] = useState([]);
  const [profile, setProfile] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState(1);
  const [selectedRole, setSelectedRole] = useState(1);
  const [gotData, setGotData] = useState(false);

  useEffect(() => {
    const fetchingProfile = () => {
      setProfile(JSON.parse(localStorage.getItem("user")));
      setUsername(JSON.parse(localStorage.getItem("user")).username);
      setNickname(JSON.parse(localStorage.getItem("user")).nickname);
      setEmail(JSON.parse(localStorage.getItem("user")).email);
      setPassword(JSON.parse(localStorage.getItem("user")).password);
      setSelectedDepartment(
        JSON.parse(localStorage.getItem("user")).Department.id
      );
      setSelectedRole(JSON.parse(localStorage.getItem("user")).Role.id);
      setGotData(true);
    };

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
          fetchingProfile();
        } else {
          toast.error("Failed to fetch roles and departments");
        }
      } catch (error) {
        toast.error(`Failed: ${error.message}`);
      }
    };

    fetchRolesAndDepartments();
  }, []);

  const UpdateHandler = async (e) => {
    e.preventDefault();

    const signUpObj = {
      username,
      email,
      password,
      nickname,
      Department: selectedDepartment,
      Role: selectedRole,
    };

    await axios
      .patch(`http://localhost:3000/user/${profile.id}`, signUpObj)
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");

        dispatch(logout());
        navigate("/");
        toast.success("User updated successfully");
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });

    console.log(signUpObj);
  };

  return (
    <>
      {gotData && (
        <UpdateForm onSubmit={UpdateHandler}>
          <StyledInput>
            <input
              type="text"
              minLength="3"
              maxLength="30"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input
              type="email"
              minLength="7"
              maxLength="30"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              minLength="7"
              maxLength="30"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
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
          </StyledInput>

          <Button
            label="Update"
            type="submit"
            styles={{
              textDecoration: "none",
              padding: "1rem 5rem",
              borderRadius: "25px",
              border: "none",
              marginTop: "2rem",
            }}
          />
        </UpdateForm>
      )}
    </>
  );
};

export default UpdateUser;
