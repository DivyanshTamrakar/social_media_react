import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { getData } from "../FetchingApi/fetchApi";
import { useLoader } from "./LoaderContext";
export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setposts] = useState([]);
  const { showloader, setshowloader } = useLoader();

  useEffect(() => {
    GetPosts();
    // eslint-disable-next-line
  }, []);

  const GetPosts = async () => {
    setshowloader(true);
    try {
      const response = await getData("/addpost");
      if (response.success) {
        setshowloader(false);
        setposts(response.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider value={{ posts, showloader ,GetPosts}}>
      {children}
    </PostContext.Provider>
  );
}
export function usePost() {
  return useContext(PostContext);
}
