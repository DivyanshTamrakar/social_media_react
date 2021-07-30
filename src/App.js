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
import Header from "./Components/Header";
import { PrivateRoute } from "./Components/PrivateRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <PrivateRoute path="/" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
