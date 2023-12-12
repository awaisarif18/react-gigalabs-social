import React, { Fragment, useEffect, useState } from "react";
import {
  ProfileContainer,
  StyledButtons,
  StyledHeading,
  StyledInfo,
} from "./style";
import Button from "../../components/base/Button";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/base/Heading";
import Heading2 from "../../components/base/Heading2.js";
import { toast } from "react-toastify";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [gotData, setGotData] = useState(false);
  const navigate = useNavigate();

  // const token = localStorage.getItem("access_token");

  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  const deleteProfile = async () => {
    const userId = profile.id;
    const response = await fetch(`http://localhost:3000/user/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("user");
          toast.success("User Deleted Successfully");
          console.log("User Deleted Successfully");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));

    console.log(response);
  };

  const updateProfile = async () => {
    navigate("/update");
  };

  useEffect(() => {
    const fetchingProfile = async () => {
      setProfile(JSON.parse(localStorage.getItem("user")));

      setGotData(true);
      // const user = axios.get("http://localhost:3000/auth/profile", config);
    };
    fetchingProfile();
    console.log("UseEffect Profile: ", profile);
    console.log("Use Effect gotData: ", gotData);
  }, []);

  console.log("profile: ", profile);
  console.log("gotData: ", gotData);

  return (
    <ProfileContainer>
      {gotData && (
        <Fragment>
          <StyledHeading>
            <Heading content="Profile" />
            <Heading2 content={profile.username} />
          </StyledHeading>
          <StyledInfo>
            <div>
              <h3>Email</h3>
              <h3>Department</h3>
              <h3>Role</h3>
            </div>

            <div>
              <h3>{profile.email}</h3>
              <h3>{profile.Department.name}</h3>
              <h3>{profile.Role.name}</h3>
            </div>
          </StyledInfo>

          <StyledButtons>
            <Button
              styles={{
                width: "100px",
                textDecoration: "none",
                padding: "1rem",
                marginRight: "20px",
                border: "none",
              }}
              label="Update"
              func={updateProfile}
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
              func={deleteProfile}
            />
          </StyledButtons>
        </Fragment>
      )}
    </ProfileContainer>
  );
};

export default Profile;
