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
import axios from "axios";

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
    try {
      await axios.delete(`http://localhost:3000/user/${userId}`);
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      toast.success("User Deleted Successfully");
      console.log("User Deleted Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchingProfile = async () => {
      setProfile(JSON.parse(localStorage.getItem("user")));

      setGotData(true);
    };
    fetchingProfile();
  }, []);

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
              func={() => navigate("/update")}
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
