import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";
import { LoginContainer, LoginForm } from "../styles/Login.style";
import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signIn } from "../features/auth/authSlice";

function Login() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const initialValues = { email: "", password: "" };

  const onSubmit = async (values) => {
    navigate("/");
    const result = await dispatch(
      signIn({
        email: values.email,
        password: values.password,
      })
    );

    if (result.error.message === "Rejected") {
      return toast.error(result.payload, {
        position: "bottom-center",
      });
    } else {
    }
  };

  const validate = (values) => {
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

  const TestLogin = () => {
    dispatch(
      signIn({
        email: "test@gmail.com",
        password: "test@123",
      })
    );
  };

  return (
    <div>
      <LoginContainer>
        {localStorage.getItem("login") ? (
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
                disabled={isAuthenticated}
                variant="contained"
                color="secondary"
                startIcon={<LockOpenIcon />}
              >
                {isAuthenticated ? "Loading.." : "Login"}
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

            <Button variant="outlined" onClick={TestLogin}>
              Login as test user
            </Button>
          </LoginForm>
        )}

        <ToastContainer />
      </LoginContainer>
    </div>
  );
}

export default Login;
