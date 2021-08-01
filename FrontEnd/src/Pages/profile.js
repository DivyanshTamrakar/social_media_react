import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { TextField } from "@material-ui/core";
import { getData, postData } from "../FetchingApi/fetchApi";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Details,
  ProfileContainer,
  ImageAvatar,
  FollowDetails,
  Username,
  PopupContent,
  Bio,
} from "./profile.style";

function Profile() {
  const email = localStorage.getItem("email");
  const [user, setuser] = useState({});

  useEffect(() => {
    GetUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.name]);

  const GetUserData = async () => {
    let response = await getData(`/users/${email}`);
    if (response.success) {
      setuser(response.user);
    }
  };

  let initialValues = { name: "", username: "", bio: "" };
  let onSubmit = (values) => {
    console.log("Form Data", values);
    UpdateData({
      name: values.name,
      username: values.username,
      bio: values.bio,
    });
  };
  let validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "name is required";
    }
    if (!values.username) {
      errors.username = "usernmae is required";
    }
    if (!values.bio) {
      errors.bio = "bio is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const UpdateData = ({ name, username, bio }) => {
    const body = { name: name, username: username, bio: bio };
    postData(body, `/users/update/${user._id}`);
    GetUserData();
  };

  return (
    <ProfileContainer>
      <ImageAvatar>
        <Avatar alt={user.name} src={user.phot_url} />
      </ImageAvatar>
      <Details>
        <Username>
          <h3>{user.username}</h3>
          <h4>{user.name}</h4>
        </Username>
        <FollowDetails>
          <h4>4 posts</h4>
          <h4>10 Follower</h4>
          <h4>14 Following</h4>
        </FollowDetails>
        <Bio>{user.bio}</Bio>

        <Popup
          modal
          repositionOnResize={true}
          trigger={
            <Button variant="outlined" color="secondary">
              Edit Profile
            </Button>
          }
          position="bottom right"
        >
          <PopupContent>
            <form onSubmit={formik.handleSubmit}>
              <Avatar alt="Divyansh" src={null} />
              <TextField
                style={{ margin: "0.5rem" }}
                required
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
              <small>{formik.errors.name && `${formik.errors.name}`}</small>
              <TextField
                style={{ margin: "0.5rem" }}
                required
                type="text"
                name="username"
                placeholder="Enter UserName"
                onChange={formik.handleChange}
                value={formik.values.username}
                id="outlined-basic"
                label="UserName"
                variant="outlined"
              />
              <small>
                {formik.errors.username && `${formik.errors.username}`}
              </small>

              <TextField
                style={{ margin: "0.5rem" }}
                required
                type="text"
                name="bio"
                placeholder="Enter bio"
                onChange={formik.handleChange}
                value={formik.values.bio}
                id="outlined-basic"
                label="Bio"
                variant="outlined"
              />
              <small>{formik.errors.bio && `${formik.errors.bio}`}</small>

              <Button type="submit" variant="contained" color="primary">
                Update
              </Button>
            </form>
          </PopupContent>
        </Popup>
      </Details>
    </ProfileContainer>
  );
}

export default Profile;
