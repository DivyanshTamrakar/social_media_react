import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "reactjs-popup/dist/index.css";
import { getData, postData } from "../FetchingApi/fetchApi";
import { useEffect, useState } from "react";
import { useProfile } from "../Context/ProfileContext";

import {
  Details,
  ProfileContainer,
  ImageAvatar,
  FollowDetails,
  Username,
  Bio,
} from "./profile.style";
import UpdateProfile from "../Components/update.profile.model";

function Profile() {
  const email = localStorage.getItem("email");
  const [user, setuser] = useState({});
  const {userid} = useProfile();

  useEffect(() => {
    GetUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.name]);

  const GetUserData = async () => {
    let response = await getData(`/users/${email}`);
    if (response.success) {
      setuser(response.user);
    }
  };
  return (
    <ProfileContainer>
      <ImageAvatar>
        <Avatar alt={user.name} src={user.phot_url} />
      </ImageAvatar>
      <Details>
        <Username>
          <h3>{user.username}</h3>
          <h4>{user.name}</h4>
        </Username>
        <FollowDetails>
          <h4>4 posts</h4>
          <h4>10 Follower</h4>
          <h4>14 Following</h4>
        </FollowDetails>
        <Bio>{user.bio}</Bio>
        <UpdateProfile datafunction={GetUserData} />
      </Details>
    </ProfileContainer>
  );
}

export default Profile;
