import React, { useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
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
import { fetchUser, email } from "../../features/users/userSlice";
function Header() {
  const { signOut } = useAuth();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(email));
  }, [dispatch]);

  return (
    <HeaderContainer>

      <Link to="/" style={UnderlineHide}>
        <HeaderLeft>
          ShareGram
        </HeaderLeft>
      </Link>


      <HeaderSearch>
        <SearchComponent />
      </HeaderSearch>

      <HeaderRight>
        <Link to="/" style={UnderlineHide}>
          <HomeIcon style={{ color: 'white' }} />
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
