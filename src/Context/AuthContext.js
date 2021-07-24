import { createContext, useContext, useState } from "react";
import { useLocation  } from "react-router-dom";
export const AuthContext = createContext();

export function AuthProvider({children}){
  const [login,setLogin] = useState(false);
  let {state} = useLocation();
  console.log("in Context",state?.from);
    return (
        <AuthContext.Provider value={{login,setLogin}}>
          {children}
        </AuthContext.Provider>
      );
}
export function useAuth(){
  return useContext(AuthContext);
   
}