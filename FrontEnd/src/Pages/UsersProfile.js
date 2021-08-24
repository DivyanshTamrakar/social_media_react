import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useParams } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import Button from "@material-ui/core/Button";
import { useProfile } from "../Context/ProfileContext";
import TabComponent from "../Components/TabComponent";
import {
  Details,
  ProfileContainer,
  ImageAvatar,
  FollowDetails,
  Username,
  Bio,
  FollowButtons,
} from "../styles/profile.style";
import { getData } from "../FetchingApi/fetchApi";

function UsersProfile() {
  let { id } = useParams();

  const [userprofile, setuserprofile] = useState({});

  const { user } = useProfile();

  useEffect(() => {
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <h4>4 posts</h4>
          <h4>10 Follower</h4>
          <h4>14 Following</h4>
        </FollowDetails>
        <Bio>{userprofile.bio}</Bio>
        {user._id !== id && (
          <FollowButtons>
            <Button variant="contained" color="primary">
              Follow
            </Button>
          </FollowButtons>
        )}
      </Details>
    </ProfileContainer>
     <div style={{width:"100%",margin:'auto'}}>
     <TabComponent userid={id}/>
     </div>
    </>
  );
}

export default UsersProfile;
