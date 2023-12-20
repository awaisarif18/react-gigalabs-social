import React, { useState, useEffect } from "react";
import {
  ButtonContainer,
  StyledInput,
  UpdateForm,
  UpdateHeader,
  UpdatePage,
} from "./style";
import { toast } from "react-toastify";
import Button from "../../components/base/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../state/loggedStatus/statusSlice";
import Heading from "../../components/base/Heading";
import { useQuery } from "react-query";

const UpdateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [departments, setDepartments] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(1);
  const [selectedRole, setSelectedRole] = useState(1);
  const [gotData, setGotData] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const departmentQuery = useQuery({
    queryKey: ["departments"],
    queryFn: () => {
      return axios
        .get("https://nestjs-user-crud-awaisarif18.vercel.app/department")
        .then((response) => setDepartments(response.data))
        .catch((error) => {
          toast.error("Failed to fetch Departments", error);
          console.log(error);
        });
    },
  });

  const roleQuery = useQuery({
    queryKey: ["roles"],
    queryFn: () => {
      return axios
        .get("https://nestjs-user-crud-awaisarif18.vercel.app/role")
        .then((response) => {
          const rolesData = response.data;
          const filteredRoles = rolesData.filter(
            (role) => role.name !== "admin"
          );

          setRoles(filteredRoles);
        })
        .catch((error) => {
          toast.error("Failed to fetch Roles", error);
          console.error("Unable to fetch Roles", error);
        });
    },
  });

  useEffect(() => {
    const fetchingProfile = () => {
      const { Department, Role, ...user } = JSON.parse(
        localStorage.getItem("user")
      );
      // console.log("Department", Department);
      setCurrentUser(user);
      setSelectedDepartment(Department.id);
      setSelectedRole(Role.id);
      setGotData(true);
    };

    // const fetchRolesAndDepartments = async () => {
    //   try {
    //     await axios
    //       .get("https://nestjs-user-crud-awaisarif18.vercel.app/role")
    //       .then((response) => {
    //         const rolesData = response.data;
    //         const filteredRoles = rolesData.filter(
    //           (role) => role.name !== "admin"
    //         );

    //         setRoles(filteredRoles);
    //       })
    //       .catch((error) => {
    //         toast.error("Failed to fetch Roles", error);
    //         console.error("Unable to fetch Roles", error);
    //       });

    //     await axios
    //       .get("https://nestjs-user-crud-awaisarif18.vercel.app/department")
    //       .then(async (response) => {
    //         const departmentsData = response.data;
    //         setDepartments(departmentsData);
    //       })
    //       .catch((error) => {
    //         toast.error("Failed to fetch Departments", error);
    //         console.error("Unable to fetch Departments", error);
    //       });
    //   } catch (error) {
    //     console.error("Failed: ", error);
    //     toast.error(`Failed: ${error.message}`);
    //   }
    // };

    // fetchRolesAndDepartments();
    fetchingProfile();
  }, []);

  const UpdateHandler = async (e) => {
    e.preventDefault();

    const { id, username, email, nickname } = currentUser;
    const updateObj = {
      username,
      email,
      nickname,
      Department: +selectedDepartment,
      Role: +selectedRole,
    };

    console.log("updateObj", updateObj);

    await axios
      .patch(
        `https://nestjs-user-crud-awaisarif18.vercel.app/user/${id}`,
        updateObj
      )
      .then((res) => {
        // console.log(res);
        // localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");

        dispatch(logout());
        navigate("/login");
        toast.success("User updated successfully");
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
    // console.log("currentUser", currentUser.username);
  };

  if (departmentQuery.isLoading || roleQuery.isLoading)
    return <h1>Loading...</h1>;
  if (departmentQuery.isError || roleQuery.isError)
    return <h1>{JSON.stringify(departmentQuery.error)}</h1>;

  return (
    <UpdatePage>
      {gotData && (
        <>
          <UpdateHeader>
            <Heading content={`Edit ${currentUser?.username} Profile`} />
          </UpdateHeader>
          <UpdateForm onSubmit={UpdateHandler}>
            <StyledInput>
              <input
                type="text"
                minLength="3"
                maxLength="30"
                placeholder="Name"
                onChange={(e) =>
                  setCurrentUser((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
                value={currentUser.username}
              />
              <input
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
            <ButtonContainer>
              <Button
                label="Update"
                type="submit"
                styles={{
                  textDecoration: "none",
                  padding: "1rem 5rem",
                  borderRadius: "25px",
                  border: "none",
                  margin: "2rem auto",
                }}
              />
            </ButtonContainer>
          </UpdateForm>
        </>
      )}
    </UpdatePage>
  );
};

export default UpdateUser;
