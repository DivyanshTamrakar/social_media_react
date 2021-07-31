import React from "react";
import Button from "@material-ui/core/Button";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { LoginContainer, LoginForm } from "./Login.style";
import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField } from "@material-ui/core";

function Login() {
  const { login, SignInWithEmailandPassword, CheckLoginStatus } = useAuth();

  let initialValues = { email: "", password: "" };
  let onSubmit = (values) => {
    console.log("Form Data", values);
    SignInWithEmailandPassword({
      email: values.email,
      password: values.password,
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
    if (!values.password) {
      errors.password = "password is required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  CheckLoginStatus();
  return (
    <LoginContainer>
      {login ? (
        <Button variant="contained" color="primary">
          Logout
        </Button>
      ) : (
        <LoginForm>
          <center>
            <h2 style={{ fontWeight: "900" }}>SignIn</h2>
          </center>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              style={{ margin: "0.5rem" }}
              required
              type="text"
              name="email"
              placeholder="Enter Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />

            <small>{formik.errors.email && `${formik.errors.email}`}</small>

            <TextField
              required
              style={{ margin: "0.5rem" }}
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />

            <small>
              {formik.errors.password && `${formik.errors.password}`}
            </small>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              startIcon={<LockOpenIcon />}
            >
              Login
            </Button>
          </form>
          <center>
            <h2 style={{ fontWeight: "900" }}>OR</h2>
          </center>

          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              color: "royalblue",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            <small style={{ textDecoration: "none" }}>
              Not having an Account ? SignUp
            </small>
          </Link>
        </LoginForm>
      )}

      <ToastContainer />
    </LoginContainer>
  );
}

export default Login;
