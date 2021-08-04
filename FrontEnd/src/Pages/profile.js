import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "reactjs-popup/dist/index.css";
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
  const { user, GetuserData } = useProfile();
  return (
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
          <h4>4 posts</h4>
          <h4>10 Follower</h4>
          <h4>14 Following</h4>
        </FollowDetails>
        <Bio>{user.bio}</Bio>
        <UpdateProfile />
      </Details>
    </ProfileContainer>
  );
}

export default Profile;
