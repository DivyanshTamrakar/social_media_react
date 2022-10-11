import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import "reactjs-popup/dist/index.css";
import {
  Details,
  ProfileContainer,
  ImageAvatar,
  FollowDetails,
  Username,
  Bio,
  ShowTab,
} from "../styles/profile.style";
import UpdateProfile from "../components/PopupModal/update.profile.model";
import TabComponent from "../components/Timeline/TabComponent";
import { useSelector } from "react-redux";
import { getData } from "../networkCall/fetchApi";
import Load from "../utils/Loader";
import { useDispatch } from "react-redux";
import { fetchUser } from "../features/users/userSlice";

function Profile() {
  const dispatch = useDispatch();

  const { user, isLoading } = useSelector((state) => state.user);
  const [length, setlength] = useState(0);

  useEffect(() => {
    const getPersonPost = async () => {
      const resp = await dispatch(fetchUser());
      console.log(resp);
      if (resp.payload.success) {
        const response = await getData(`/addpost/${resp.payload.user?._id}`);
        setlength(response.posts.length);
      }
    };

    getPersonPost();
  }, [user._id]);

  return (
    <div>
      {isLoading ? (
        <Load />
      ) : (
        <div>
          <ProfileContainer>
            <ImageAvatar>
              <Avatar alt={user.name} src={user.photo_url} />
            </ImageAvatar>
            <Details>
              <Username>
                <h3>{user.username}</h3>
                <h4>{user.name}</h4>
              </Username>
              <FollowDetails>
                <h4>{length} posts</h4>
                <h4>{user?.followers?.length} Follower</h4>
                <h4>{user?.following?.length} Following</h4>
              </FollowDetails>
              <Bio>{user.bio}</Bio>
              <UpdateProfile />
            </Details>
          </ProfileContainer>
          {/* <ShowTab>
            <TabComponent userid={user?._id} />
          </ShowTab> */}
        </div>
      )}
    </div>
  );
}

export default Profile;
