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
} from "../styles/profile.style";
import UpdateProfile from "../Components/update.profile.model";

function Profile() {
  const { user } = useProfile();
  return (
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
            <h4>4 posts</h4>
            <h4>10 Follower</h4>
            <h4>14 Following</h4>
          </FollowDetails>
          <Bio>{user.bio}</Bio>
          <UpdateProfile />
        </Details>
      </ProfileContainer>
      <hr style={{ margin: "0px 20px " }}></hr>
    </div>
  );
}

export default Profile;
