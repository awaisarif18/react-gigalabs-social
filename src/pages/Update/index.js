import React, { useState, useEffect } from "react";
import { StyledInput, UpdateForm } from "./style";
import { toast } from "react-toastify";
import Button from "../../components/base/Button";
import axios from "axios";

const UpdateUser = () => {
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

    // axios.patch(`http://localhost:3000/user/${profile.id}`, signUpObj);

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
              value={profile.username}
            />
            <input
              type="email"
              minLength="7"
              maxLength="30"
              placeholder="Email"
              value={profile.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              minLength="7"
              maxLength="30"
              placeholder="Password"
              value={profile.password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              minLength="4"
              maxLength="30"
              placeholder="Nickname"
              value={profile.nickname}
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
