import { createContext, useContext, useState } from "react";
import { auth } from "../firebase";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);

  const loginStatus = localStorage.getItem("login");

  const CheckLoginStatus = () => {
    if (loginStatus) {
      setLogin(true);
    }
  };

  const SignInWithEmailandPassword = async ({ email, password }) => {
    try {
      let response = await auth.signInWithEmailAndPassword(email, password);

      if (response.user) {
        localStorage.setItem("login", true);
        localStorage.setItem("email", response.user.email);
        setLogin(true);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.clear();
        setLogin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        SignInWithEmailandPassword,
        setLogin,
        signOut,
        CheckLoginStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
