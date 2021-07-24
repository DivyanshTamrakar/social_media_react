import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Activity from './Pages/Activity';
import Chats from './Pages/chats';
import Explore from './Pages/explore';
import Profile from './Pages/profile';
import Login from './Pages/Login';
import Header from './Components/Header';
function App() {
  const email = localStorage.getItem('email');
  return (
    <div className="App">
  
  {email && <Header/>}
 <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/activity" element={<Activity/>}/>
   <Route path="/chats" element={<Chats/>}/>
   <Route path="/explore" element={<Explore/>}/>
   <Route path="/profile" element={<Profile/>}/>
   <Route path="/login" element={<Login/>}/>
 </Routes>
    </div>
  );
}

export default App;



