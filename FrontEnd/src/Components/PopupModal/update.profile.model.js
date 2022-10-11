import React from "react";
import Button from "@material-ui/core/Button";
import Popup from "reactjs-popup";
import Avatar from "@material-ui/core/Avatar";
import "reactjs-popup/dist/index.css";
import { TextField } from "@material-ui/core";
import { PopupContent, ProfileImage } from "../../styles/profile.style";
import { useFormik } from "formik";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdateUserData } from "../../features/users/userSlice";

function UpdateProfile() {
  const [profile, setprofile] = useState(null);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [initialValues] = useState({
    name: user.name,
    username: user.username,
    bio: user.bio,
  });

  let onSubmit = (values) => {
    UpdateData({
      name: values.name,
      photo_url: profile,
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

  const UpdateData = async ({ name, photo_url, username, bio }) => {
    dispatch(
      UpdateUserData({
        body: {
          photo_url: photo_url,
          name: name,
          username: username,
          bio: bio,
        },
        userid: user._id,
      })
    );
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        setprofile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Popup
      modal
      repositionOnResize={true}
      contentStyle={{ borderRadius: "20px" }}
      trigger={
        <Button variant="outlined" color="secondary">
          Edit Profile
        </Button>
      }
      position="bottom right"
    >
      <PopupContent>
        <ProfileImage>
          <center>
            <Avatar alt="Divyansh" src={profile} />

            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              onChange={imageHandler}
            />
            <label htmlFor="contained-button-file">
              {profile === null && (
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              )}
            </label>
          </center>
        </ProfileImage>

        <form onSubmit={formik.handleSubmit}>
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
          <small>{formik.errors.username && `${formik.errors.username}`}</small>

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
  );
}

export default UpdateProfile;
