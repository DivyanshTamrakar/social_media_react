import { createContext, useContext, useState ,useEffect} from "react";
import { getData  } from "../FetchingApi/fetchApi";

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {

    const [userid, setuserid] = useState("0");
  
    const email = localStorage.getItem("email");
  useEffect(() => {
    GetUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const GetUserData = async () => {
    let response = await getData(`/users/${email}`);
    if (response.success) {
        setuserid(response.user._id);
    }
  };
  
  return (
    <ProfileContext.Provider
      value={{ userid }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
export function useProfile() {
  return useContext(ProfileContext);
}
