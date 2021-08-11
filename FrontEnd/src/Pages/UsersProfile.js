import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useParams } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import {
  Details,
  ProfileContainer,
  ImageAvatar,
  FollowDetails,
  Username,
  Bio,
} from "../styles/profile.style";
import { getData } from "../FetchingApi/fetchApi";

function UsersProfile() {
  let { id } = useParams();

  const [userprofile,setuserprofile] = useState({});

  useEffect(() => {
    GetData();
  }, [id]);

  const GetData = async () => {
    try {
        let response = await getData(`/users/profile/${id}`);
  
        if (response.success) {
            setuserprofile(response.user);
          
        }
      } catch (error) {
        console.log("errorr", error);
      }
  };

  return (
    <ProfileContainer>
      <ImageAvatar>
        <Avatar alt={userprofile.name} src={userprofile.photo_url} />
      </ImageAvatar>
      <Details>
        <Username>
          <h3>{userprofile.username}</h3>
          <h4>{userprofile.name}</h4>
        </Username>
        <FollowDetails>
          <h4>4 posts</h4>
          <h4>10 Follower</h4>
          <h4>14 Following</h4>
        </FollowDetails>
        <Bio>{userprofile.bio}</Bio>
      </Details>
    </ProfileContainer>
  );
}

export default UsersProfile;
