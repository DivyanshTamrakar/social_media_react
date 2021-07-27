import React from "react";
import Button from "@material-ui/core/Button";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { auth, provider } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { LoginContainer, LoginForm } from "./Login.style";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const SignInWithEmailandPassword = async ({ email, password }) => {
  try {
    let response = await auth.signInWithEmailAndPassword(email, password);

    if (response.user) {
      console.log(response.user.email);
      console.log(response.user.uid);
    }
  } catch (error) {
    toast.error(error.message, { position: "bottom-center" });
  }
};

function Login() {
  let navigate = useNavigate();
  const { setLogin } = useAuth();

  const signIn = async () => {
    try {
      let { user } = await auth.signInWithPopup(provider);
      if (user) {
        localStorage.setItem("email", user.email);
        localStorage.setItem("name", user.displayName);
        localStorage.setItem("photo", user.photoURL);
        setLogin(true);
        navigate("/", { replace: true });
      } else {
        alert("Something went wrong !");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <LoginContainer>
      <LoginForm>
        <center>
          <h2 style={{ fontWeight: "900" }}>SignIn</h2>
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

          <label htmlFor="password">Password</label>
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
            Login
          </Button>
        </form>
        <center>
          <h2 style={{ fontWeight: "900" }}>OR</h2>
        </center>

        <Button
          onClick={signIn}
          variant="contained"
          color="primary"
          startIcon={<LockOpenIcon />}
        >
          Sign In with Google
        </Button>
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
      <ToastContainer />
    </LoginContainer>
  );
}

export default Login;
