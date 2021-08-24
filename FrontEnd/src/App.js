import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Activity from "./Pages/Activity";
import Chats from "./Pages/chats";
import Explore from "./Pages/explore";
import Profile from "./Pages/profile";
import Signup from "./Pages/SignUp";
import Login from "./Pages/Login";
import Header from "./Components/Header/Header";
import { PrivateRoute } from "./Components/PrivateRouter/PrivateRouter";
import { useAuth } from "./Context/AuthContext";
import UsersProfile from "./Pages/UsersProfile";

function App() {
  const { CheckLoginStatus, login } = useAuth();

  CheckLoginStatus();

  return (
    <div className="App">
      {login && <Header />}
      <Routes>
        <PrivateRoute path="/" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/explore" element={<Explore />} />
        <PrivateRoute path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:id" element={<UsersProfile />} />
      </Routes>
    </div>
  );
}

export default App;
