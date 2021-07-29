import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAuth } from "../Context/AuthContext";

function Profile() {

  const { signOut } = useAuth();

  return (
    <ProfileContainer>
      <Button
        onClick={signOut}
        variant="contained"
        color="secondary"
        startIcon={<ExitToAppIcon />}
      >
        Sign Out
      </Button>
    </ProfileContainer>
  );
}

export default Profile;

const ProfileContainer = styled.div``;
