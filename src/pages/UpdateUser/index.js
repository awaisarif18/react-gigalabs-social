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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../state/loggedStatus/statusSlice";
import Heading from "../../components/base/Heading";
import { useGetDepartmentsQuery } from "../../services/departments";
import { useGetRolesQuery } from "../../services/roles";
import Loading from "../../components/base/Loading";
import { useUpdateUserMutation } from "../../services/update";
import { setUser } from "../../state/userData/userSlice";

const UpdateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedDepartment, setSelectedDepartment] = useState(1);
  const [selectedRole, setSelectedRole] = useState(1);
  const [gotData, setGotData] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [updateUser] = useUpdateUserMutation();
  const { data: rtkDepartments, isFetching: isFetchingDepartments } =
    useGetDepartmentsQuery();
  const { data: rtkRoles, isFetching: isFetchingRoles } = useGetRolesQuery();
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    const fetchingProfile = () => {
      const { Department, Role, ...user } = userData;
      setCurrentUser(user);
      setSelectedDepartment(Department.id);
      setSelectedRole(Role.id);
      setGotData(true);
    };

    fetchingProfile();
  }, [userData]);

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

    updateUser({ updateObj, id }).then(() => {
      localStorage.removeItem("access_token");
      dispatch(setUser({}));
      dispatch(logout());
      navigate("/login");
      toast.success("User updated successfully");
    });
  };

  if (isFetchingDepartments && isFetchingRoles) {
    return <Loading />;
  }

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
                value={currentUser?.username}
              />
              <input
                type="email"
                minLength="7"
                maxLength="30"
                placeholder="Email"
                value={currentUser?.email}
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
                value={currentUser?.nickname}
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
