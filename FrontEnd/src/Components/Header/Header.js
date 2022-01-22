import React ,{useEffect}from "react";
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
import SearchComponent from "../SearchFeature/SearchComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser,email} from "../../features/users/userSlice";
function Header() {
  const { signOut } = useAuth();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(email))
    
  }, [dispatch])

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
          trigger={
            <Avatar
              style={{ cursor: "pointer", border: "1px solid black" }}
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
