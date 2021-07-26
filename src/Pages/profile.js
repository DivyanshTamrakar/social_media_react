import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {auth} from '../firebase';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';


function Profile() {

  const navigate = useNavigate();

const {setLogin} = useAuth();

  const signOut =() =>{
    localStorage.clear();
    setLogin(false);
    auth.signOut();
    navigate("/login", { replace: true });
}


    return (
        <ProfileContainer>
       <Button onClick={signOut}
        variant="contained"
        color="secondary"
        startIcon={<ExitToAppIcon />}
        >
        Sign Out
      </Button>
        </ProfileContainer>
    )
}

export default Profile

const ProfileContainer = styled.div``;
