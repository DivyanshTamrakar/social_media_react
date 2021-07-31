import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { TextField } from "@material-ui/core";
import {
  Details,
  ProfileContainer,
  ImageAvatar,
  FollowDetails,
  Username,
  PopupContent,
  Bio,
} from "./profile.style";

function Profile() {
  return (
    <ProfileContainer>
      <ImageAvatar>
        <Avatar alt="Divyansh" src={null} />
      </ImageAvatar>
      <Details>
        <Username>
          <h3>tamrakar_divyansh_01</h3>
          <h4>Divyansh Tamrakar</h4>
        </Username>
        <FollowDetails>
          <h4>4 posts</h4>
          <h4>10 Follower</h4>
          <h4>14 Following</h4>
        </FollowDetails>
        <Bio>A Philomath (Just Google it ). 😉 A Millennial.</Bio>

        <Popup
          modal
          repositionOnResize={true}
          trigger={
            <Button variant="outlined" color="secondary">
              Edit Profile
            </Button>
          }
          position="bottom right"
        >
          <PopupContent>
            <form>
              <Avatar alt="Divyansh" src={null} />
              <TextField
                style={{ margin: "0.5rem" }}
                required
                type="text"
                name="name"
                placeholder="Enter Name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
              <TextField
                style={{ margin: "0.5rem" }}
                required
                type="text"
                name="username"
                placeholder="Enter UserName"
                id="outlined-basic"
                label="UserName"
                variant="outlined"
              />

              <TextField
                style={{ margin: "0.5rem" }}
                required
                type="text"
                name="Bio"
                placeholder="Enter your Bio"
                id="outlined-basic"
                label="BIO"
                variant="outlined"
              />

              <Button type="submit" variant="contained" color="primary">
                Update
              </Button>
            </form>
          </PopupContent>
        </Popup>
      </Details>
    </ProfileContainer>
  );
}

export default Profile;
