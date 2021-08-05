import React from "react";
import Button from "@material-ui/core/Button";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";
import { LoginContainer, LoginForm } from "../styles/Login.style";
import { useFormik } from "formik";
import { auth } from "../FirebaseConfig/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField } from "@material-ui/core";
import { postData } from "../FetchingApi/fetchApi";

let initialValues = { username: "", email: "", name: "", password: "" };
let onSubmit = (values) => {
  console.log("Form Data", values);
  SignUpWithEmailandPassword({
    username: values.username,
    name: values.name,
    email: values.email,
    pass: values.password,
  });
};
let validate = (values) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  let errors = {};

  if (!values.email) {
    errors.email = "email is required";
  } else if (!re.test(values.email)) {
    errors.email = "Invalid Email Format";
  }
  if (!values.name) {
    errors.name = "name is required";
  }
  if (!values.username) {
    errors.username = "username is required";
  }
  if (!values.password) {
    errors.password = "password is required";
  }

  return errors;
};

const SignUpWithEmailandPassword = async ({ username, name, email, pass }) => {
  try {
    let response = await auth.createUserWithEmailAndPassword(email, pass);

    if (response.user) {
      const body = {
        username: username,
        name: name,
        email: response.user.email,
        password: pass,
      };
      postData(body, "/users/signup");
    }
  } catch (error) {
    toast.error(error.message, { position: "bottom-center" });
  }
};

function Signup() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <LoginContainer>
      <LoginForm>
        <center>
          <h2 style={{ fontWeight: "900" }}>SignUp</h2>
        </center>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            style={{ margin: "0.5rem" }}
            required
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <small>{formik.errors.email && `${formik.errors.email}`}</small>

          <TextField
            style={{ margin: "0.5rem" }}
            required
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <small>{formik.errors.name && `${formik.errors.name}`}</small>

          <TextField
            style={{ margin: "0.5rem" }}
            required
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <small>{formik.errors.password && `${formik.errors.password}`}</small>

          <TextField
            style={{ margin: "0.5rem" }}
            required
            id="outlined-basic"
            label="Username"
            variant="outlined"
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <small>{formik.errors.username && `${formik.errors.username}`}</small>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            startIcon={<LockOpenIcon />}
          >
            SignUp
          </Button>
        </form>
        <center>
          <h2 style={{ fontWeight: "900" }}>OR</h2>
        </center>

        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "royalblue",
            fontSize: "20px",
            fontWeight: "800",
          }}
        >
          <small>Already have account ? SignIn</small>
        </Link>

        <ToastContainer />
      </LoginForm>
    </LoginContainer>
  );
}

export default Signup;
