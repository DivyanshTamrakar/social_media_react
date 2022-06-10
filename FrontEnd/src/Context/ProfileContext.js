import { createContext, useContext, useState, useEffect } from "react";
import { getData } from "../FetchingApi/fetchApi";
export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const email = localStorage.getItem("email");
  const [user, setuser] = useState({});
  const [followstatus, setfollowstatus] = useState({
    followers: [],
    following: [],
  });

  useEffect(() => {
    const GetuserData = async () => {
      try {
        const response = await getData(`/users/${email}`);

        if (response.success) {
          setuser(response.user);
          setfollowstatus({
            ...followstatus,
            followers: response.user.followers,
            following: response.user.following,
          });
        }
      } catch (error) {
        console.log("errorr", error);
      }
    }
    GetuserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <ProfileContext.Provider
      value={{ user, setuser, followstatus, setfollowstatus }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
export function useProfile() {
  return useContext(ProfileContext);
}
