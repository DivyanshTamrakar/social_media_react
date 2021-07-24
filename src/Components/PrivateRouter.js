import React from 'react'
import { useAuth } from "../Context/AuthContext";
import {  Route, Navigate} from "react-router-dom";


export function PrivateRoute({path, ...props}){

  
    const { login } = useAuth();

    console.log("via private router login");
    console.log({path});
    return login ? <Route path={path} {...props}/>:<Navigate state={{from:path}} replace={true} to={'/login'}/>;

  }
