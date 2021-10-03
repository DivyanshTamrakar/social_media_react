import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../FirebaseConfig/firebase";
import { useLoader } from "./LoaderContext";
import { useProfile } from "./ProfileContext";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);

  const loginStatus = localStorage.getItem("login");

  const { setuser } = useProfile();
  const { setshowloader } = useLoader();

  const CheckLoginStatus = () => {
    if (loginStatus) {
      setLogin(true);
    }
  };

  const SignInWithEmailandPassword = async ({ email, password }) => {
    try {
      let response = await auth.signInWithEmailAndPassword(email, password);

      if (response.user) {
        setshowloader(false);
        localStorage.setItem("login", true);
        localStorage.setItem("email", response.user.email);
        window.location.reload(false);
        setLogin(true);
      }
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
      setshowloader(false);
    }
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.clear();
        setuser({});
        setLogin(false);

        // window.location.reload(false);
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
