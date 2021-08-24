import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
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
import { useAuth } from "../../Context/AuthContext";
import { useProfile } from "../../Context/ProfileContext";
import SearchComponent from "../SearchFeature/SearchComponent";

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
        <SearchComponent />
      </HeaderSearch>

      <HeaderRight>
        <Link to="/" style={UnderlineHide}>
          <HomeOutlinedIcon />
        </Link>
        <Link to="/activity" style={UnderlineHide}>
          <NotificationsOutlinedIcon />
        </Link>
        <Popup
          contentStyle={{ padding: "0", borderRadius: "8px", border: "none" }}
          trigger={
            <Avatar
              style={{ cursor: "pointer", border: "2px solid black" }}
              alt={user.name}
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
            <hr></hr>
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
