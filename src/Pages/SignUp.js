import React from "react";
import Button from "@material-ui/core/Button";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";
import { LoginContainer, LoginForm } from "./Login.style";
import { useFormik } from "formik";

let initialValues = { email: "", name: "", password: "" };
let onSubmit = (values) => {
  console.log("Form Data", values);
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
  if (!values.password) {
    errors.password = "password is required";
  }

  return errors;
};

function Signup() {
  const formik = useFormik({ initialValues, onSubmit, validate });

  return (
    <LoginContainer>
      <LoginForm>
        <center>
          <h2 style={{ fontWeight: "900" }}>SignUp</h2>
        </center>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <small>{formik.errors.email && `${formik.errors.email}`}</small>

          <label htmlFor="email">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <small>{formik.errors.name && `${formik.errors.name}`}</small>

          <label htmlFor="text">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <small>{formik.errors.password && `${formik.errors.password}`}</small>

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
      </LoginForm>
    </LoginContainer>
  );
}

export default Signup;
