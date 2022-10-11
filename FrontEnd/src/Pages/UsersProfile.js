import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useParams } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import TabComponent from "../components/Timeline/TabComponent";
import {
  Details,
  ProfileContainer,
  ImageAvatar,
  FollowDetails,
  Username,
  Bio,
  ShowTab,
} from "../styles/profile.style";
import { getData } from "../networkCall/fetchApi";

function UsersProfile() {
  let { id } = useParams();

  const [userprofile, setuserprofile] = useState({});

  const [length, setlength] = useState(0);

  useEffect(() => {
    const GetPersonPost = async () => {
      const response = await getData(`/addpost/${id}`);
      if (response.success) {
        setlength(response.posts.length);
      }
    };
    GetPersonPost();
  }, [id]);

  useEffect(() => {
    const GetData = async () => {
      try {
        const response = await getData(`/users/profile/${id}`);
        if (response.success) {
          setuserprofile(response.user);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    GetData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
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
            <h4>{length} posts</h4>
            <h4>0 Follower</h4>
            <h4>0 Following</h4>
          </FollowDetails>
          <Bio>{userprofile.bio}</Bio>
        </Details>
      </ProfileContainer>
      <ShowTab>
        <TabComponent userid={id} />
      </ShowTab>
    </>
  );
}

export default UsersProfile;
