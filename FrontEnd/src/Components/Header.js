import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
  PopupContent,
  ProfileDetails,
  UnderlineHide,
} from "./Header.style";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useProfile } from "../Context/ProfileContext";

function Header() {
  const { signOut } = useAuth();
  const { user } = useProfile();

  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to="/">
          <img
            src={
              "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            }
            alt="logoicon"
          />
        </Link>
      </HeaderLeft>

      <HeaderSearch>
        <input placeholder="Search " type="text" />
      </HeaderSearch>

      <HeaderRight>
        <Link to="/" style={UnderlineHide}>
          <HomeOutlinedIcon />
        </Link>
        <Link to="/chats" style={UnderlineHide}>
          <ChatOutlinedIcon />
        </Link>
        <Link to="/explore" style={UnderlineHide}>
          <ExploreOutlinedIcon />
        </Link>
        <Link to="/activity" style={UnderlineHide}>
          <FavoriteBorderOutlinedIcon />
        </Link>
        <Popup
          contentStyle={{ borderRadius: "8px" }}
          trigger={
            <Avatar
              style={{ cursor: "pointer" }}
              alt={"divysn"}
              src={user.photo_url}
            />
          }
          position="bottom right"
        >
          <PopupContent>
            <Link to="/profile" style={UnderlineHide}>
              <ProfileDetails>
                <AccountCircleRoundedIcon />
                <h3>Profile</h3>
              </ProfileDetails>
            </Link>
            {<hr />}
            <ProfileDetails onClick={signOut}>
              <ExitToAppIcon />
              <h3>Logout</h3>
            </ProfileDetails>
          </PopupContent>
        </Popup>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
