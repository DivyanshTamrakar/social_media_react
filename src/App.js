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
import {useAuth} from './Context/AuthContext';
import {PrivateRoute} from './Components/PrivateRouter';

function App() {
  
  const { login, setLogin} = useAuth();

    const email = localStorage.getItem('email');

    if(email !== null){

       setLogin(true);
     }

  return (
    <div className="App">
  
  {login && <Header/>}
  <Routes>
   <PrivateRoute path="/" element={<Home/>}/>
   {login && <Route path="/activity" element={<Activity/>}/>}
   {login && <Route path="/chats" element={<Chats/>}/>}
   {login && <Route path="/explore" element={<Explore/>}/>}
   {login && <Route path="/profile" element={<Profile/>}/>}
   {!login && <Route path="/login" element={<Login/>}/>}
   
 </Routes>
 
    </div>
  );
}

export default App;



