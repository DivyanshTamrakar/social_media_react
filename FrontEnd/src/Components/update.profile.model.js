import React from "react";
import Button from "@material-ui/core/Button";
import Popup from "reactjs-popup";
import Avatar from "@material-ui/core/Avatar";
import "reactjs-popup/dist/index.css";
import { postData } from "../FetchingApi/fetchApi";
import { TextField } from "@material-ui/core";
import { PopupContent } from "../Pages/profile.style";
import { useFormik } from "formik";

function UpdateProfile({ userid, datafunction}) {
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
    onSubmit ,
    validate,
  });

  const UpdateData = ({ name, username, bio }) => {
    const body = { name: name, username: username, bio: bio };
    postData(body, `/users/update/${userid}`);
    datafunction();

  };

  return (
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
