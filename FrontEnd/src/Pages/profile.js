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
import UpdateProfile from "../Components/PopupModal/update.profile.model";
import TabComponent from "../Components/Timeline/TabComponent";
import { useSelector } from "react-redux";
import { getData } from "../FetchingApi/fetchApi";
import Load from "../utils/Loader";

function Profile() {
  const user = useSelector((state) => state.user.user);
  const loadstate = useSelector((state) => state.user.isLoading);
  const [length, setlength] = useState(0);

  useEffect(() => {
    GetPersonPost();
    // eslint-disable-next-line
  }, [length]);

  const GetPersonPost = async () => {
    const response = await getData(`/addpost/${user._id}`);
    if (response.success) {
      setlength(response.posts.length);
    }
  };

  return (
    <div>
      {loadstate ? (
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
          <ShowTab>
            <TabComponent userid={user._id} />
          </ShowTab>
        </div>
      )}
    </div>
  );
}

export default Profile;
