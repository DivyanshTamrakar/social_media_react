import React from 'react'
import { useAuth } from "../Context/AuthContext";
import {  Route, Navigate} from "react-router-dom";


export function PrivateRoute({path, ...props}){
    let {login} = useAuth();
    console.log("via private router login");
    console.log({path});
    return login ? <Route path={path} {...props}/>:<Navigate state={{from:path}} replace={true} to={'/profile'}/>;

  }
