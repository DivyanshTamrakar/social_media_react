import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useParams } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import Button from "@material-ui/core/Button";
import { useProfile } from "../Context/ProfileContext";
import TabComponent from "../Components/Timeline/TabComponent";
import {
  Details,
  ProfileContainer,
  ImageAvatar,
  FollowDetails,
  Username,
  Bio,
  FollowButtons,
} from "../styles/profile.style";
import { getData, postData } from "../FetchingApi/fetchApi";

function UsersProfile() {
  let { id } = useParams();

  const [userprofile, setuserprofile] = useState({});
  const [userfollowstatus, setuserfollowstatus] = useState({
    followers: [],
    following: [],
  });
  const { user, followstatus, setfollowstatus } = useProfile();

  const UnFollowClick = async (id) => {
    let body = { followerid: id, followingid: user._id };

    try {
      let response = await postData(body, "/users/unfollow");

      if (response.success) {
        setuserfollowstatus({
          ...userfollowstatus,
          followers: response.result.followers,
          following: response.result.following,
        });
      }
    } catch (error) {
      console.log("errorr", error);
    }

    try {
      let response = await postData(body, "/users/unfollowing");

      if (response.success) {
        setfollowstatus({
          ...followstatus,
          followers: response.result.followers,
          following: response.result.following,
        });
      }
    } catch (error) {
      console.log("errorr", error);
    }
  };

  const FollowClick = async (id) => {
    let body = { followerid: id, followingid: user._id };

    try {
      let response = await postData(body, "/users/follow");

      if (response.success) {
        setuserfollowstatus({
          ...userfollowstatus,
          followers: response.result.followers,
          following: response.result.following,
        });
      }
    } catch (error) {
      console.log("errorr", error);
    }

    try {
      let response = await postData(body, "/users/following");

      if (response.success) {
        setfollowstatus({
          ...followstatus,
          followers: response.result.followers,
          following: response.result.following,
        });
      }
    } catch (error) {
      console.log("errorr", error);
    }
  };

  useEffect(() => {
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const GetData = async () => {
    try {
      let response = await getData(`/users/profile/${id}`);

      if (response.success) {
        setuserprofile(response.user);
        setuserfollowstatus({
          ...userfollowstatus,
          followers: response.user.followers,
          following: response.user.following,
        });
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
            <h4>{userfollowstatus.followers.length} Follower</h4>
            <h4>{userfollowstatus.following.length} Following</h4>
          </FollowDetails>
          <Bio>{userprofile.bio}</Bio>
          {user._id !== id && (
            <FollowButtons>
              <Button
                onClick={() => {
                  userfollowstatus.followers.includes(user._id)
                    ? UnFollowClick(id)
                    : FollowClick(id);
                }}
                variant="contained"
                color="primary"
              >
                {userfollowstatus.followers.includes(user._id)
                  ? "Unfollow"
                  : "Follow"}
              </Button>
            </FollowButtons>
          )}
        </Details>
      </ProfileContainer>
      <div style={{ width: "100%", margin: "auto" }}>
        <TabComponent userid={id} />
      </div>
    </>
  );
}

export default UsersProfile;
