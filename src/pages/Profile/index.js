import React, { useEffect, useState } from "react";
import { ProfileContainer } from "./style";
import Button from "../../components/base/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { filter } from "lodash";

const Profile = () => {
  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [profile, setProfile] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userDepartment, setUserDepartment] = useState("");
  const [profileObj, setProfileObj] = useState({});

  // const token = localStorage.getItem("access_token");

  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const fetchRolesAndDepartments = async () => {
    try {
      const rolesResponse = await fetch("http://localhost:3000/role");
      const departmentsResponse = await fetch(
        "http://localhost:3000/department"
      );

      if (rolesResponse.ok && departmentsResponse.ok) {
        const rolesData = await rolesResponse.json();
        const departmentsData = await departmentsResponse.json();

        const filteredRoles = rolesData.filter((role) => role.name !== "admin");

        setRoles(filteredRoles);
        setDepartments(departmentsData);
      } else {
        toast.error("Failed to fetch roles and departments");
      }
    } catch (error) {
      toast.error(`Failed: ${error.message}`);
    }
  };

  const fetchingProfile = async () => {
    setProfile(JSON.parse(localStorage.getItem("user")));
    // const user = axios.get("http://localhost:3000/auth/profile", config);

    // console.log(user);
  };

  const settingProfile = async () => {
    setUserRole(filter((role) => role.id === profile.role_id));
    setUserDepartment(
      filter((department) => department.id === profile.department_id)
    );
    setProfileObj({
      username: profile.username,
      email: profile.email,
      password: profile.password,
      nickname: profile.nickname,
      Department: userDepartment.name,
      Role: userRole.name,
    });
  };

  useEffect(() => {
    fetchingProfile();
    fetchRolesAndDepartments();
    settingProfile();
  }, []);

  console.log("profile: ", profile);
  console.log("role: ", roles);
  console.log("departments:", departments);
  console.log("User Profiles: ", profileObj);

  return (
    <ProfileContainer>
      {profileObj && (
        <>
          <div>
            <h1>{profile.username}</h1>
          </div>
          <div>
            <h3>{profile.email}</h3>
          </div>
          <div>
            <h3>{profileObj.Department}</h3>
          </div>
          <div>
            <h3>Department</h3>
          </div>

          <div>
            <Button
              styles={{
                width: "100px",
                textDecoration: "none",
                padding: "1rem",
                marginRight: "20px",
                border: "none",
              }}
              label="Update"
            />
            <Button
              styles={{
                width: "100px",
                textDecoration: "none",
                padding: "1rem",
                marginRight: "20px",
                border: "none",
              }}
              label="Delete"
            />
          </div>
        </>
      )}
    </ProfileContainer>
  );
};

export default Profile;
