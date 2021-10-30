import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "reactjs-popup/dist/index.css";
import {
  Details,
  ProfileContainer,
  ImageAvatar,
  FollowDetails,
  Username,
  Bio,
} from "../styles/profile.style";
import UpdateProfile from "../Components/PopupModal/update.profile.model";
import TabComponent from "../Components/Timeline/TabComponent";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.user);

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
            {/* <h4>{followstatus.followers.length} Follower</h4> */}
            <h4>{user?.followers?.length} Follower</h4>
            <h4>{user?.following?.length} Following</h4>
          </FollowDetails>
          <Bio>{user.bio}</Bio>
          <UpdateProfile />
        </Details>
      </ProfileContainer>
      <div style={{ width: "100%", margin: "auto" }}>
        <TabComponent userid={user._id} />
      </div>
    </div>
  );
}

export default Profile;
