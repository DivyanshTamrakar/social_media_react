import React from 'react';
import "./profile.css";
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth,provider} from '../firebase'


function Profile() {

    return (
        <ProfileContainer>
      Profile Container
        </ProfileContainer>
    )
}

export default Profile

const ProfileContainer = styled.div``;
