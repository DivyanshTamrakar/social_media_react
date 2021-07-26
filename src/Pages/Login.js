import React from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {auth,provider} from '../firebase';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../Context/AuthContext';


function Login() {

    let navigate = useNavigate();
    const {setLogin} = useAuth();

    const signIn = async () =>{
    try {

        let { user } = await auth.signInWithPopup(provider);
    if(user){
        localStorage.setItem('email', user.email);
        localStorage.setItem('name', user.displayName);
        localStorage.setItem('photo', user.photoURL);
        setLogin(true);
        navigate("/", { replace: true });
        
    }
    else{
        alert('Something went wrong !');
    }
    
}
catch(error){
    console.log('error', error);

}
    

}

    return (
          <LoginContainer>


            
        <Button onClick={signIn}
        variant="contained"
        color="primary"
        startIcon={<LockOpenIcon />}
        >
        Sign In with Google
      </Button>




     



        </LoginContainer>
    )
}

export default Login


const LoginContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display:flex;
  flex-direction: column;
  `;