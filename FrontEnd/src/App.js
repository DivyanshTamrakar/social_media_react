import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Chats from "./pages/chats";
import Explore from "./pages/explore";
import Profile from "./pages/profile";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import { PrivateRoute } from "./components/protecedRoute/PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import UsersProfile from "./pages/UsersProfile";
import { checkStatus } from "./features/auth/authSlice";
import { fetchUser } from "./features/users/userSlice";
import { fetchPost } from "./features/posts/postSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      dispatch(checkStatus());
      dispatch(fetchUser());
      dispatch(fetchPost());
    })();
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="App">
      {isAuthenticated && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/activity" element={<Activity />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:id" element={<UsersProfile />} />
      </Routes>
    </div>
  );
}

export default App;
