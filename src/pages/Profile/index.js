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
import { useDeleteUserMutation } from "../../services/delete.js";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../state/userData/userSlice.js";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [gotData, setGotData] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteUser] = useDeleteUserMutation();
  const data = useSelector((state) => state.user);

  const deleteProfile = async (e) => {
    e.preventDefault();
    const userId = profile.id;

    deleteUser({ userId }).then(() => {
      localStorage.removeItem("access_token");
      dispatch(setUser({}));
      toast.success("User Deleted Successfully");
      console.log("User Deleted Successfully");
      navigate("/");
    });
  };
  useEffect(() => {
    const fetchingProfile = async () => {
      setProfile(data);
      setGotData(true);
    };
    fetchingProfile();
  }, [data]);

  return (
    <ProfileContainer>
      {gotData && (
        <Fragment>
          <StyledHeading>
            <Heading content="Profile" />
            <Heading2 content={profile?.username} />
          </StyledHeading>
          <StyledInfo>
            <div>
              <h3>Email</h3>
              <h3>Department</h3>
              <h3>Role</h3>
            </div>

            <div>
              <h3>{profile?.email}</h3>
              <h3>{profile?.Department.name}</h3>
              <h3>{profile?.Role.name}</h3>
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
