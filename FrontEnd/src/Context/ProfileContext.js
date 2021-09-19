import { createContext, useContext, useState, useEffect } from "react";
import { getData } from "../FetchingApi/fetchApi";
export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const email = localStorage.getItem("email");
  const [user, setuser] = useState({});

  useEffect(() => {
    GetuserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);
  const GetuserData = async () => {
    try {
      let response = await getData(`/users/${email}`);

      if (response.success) {
        setuser(response.user);
      }
    } catch (error) {
      console.log("errorr", error);
    }
  };

  return (
    <ProfileContext.Provider value={{ user, GetuserData, setuser }}>
      {children}
    </ProfileContext.Provider>
  );
}
export function useProfile() {
  return useContext(ProfileContext);
}
