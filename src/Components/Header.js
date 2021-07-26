import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import Avatar from '@material-ui/core/Avatar';
import {HeaderContainer,HeaderLeft,HeaderRight,HeaderSearch} from './Header.style'
import {Link} from 'react-router-dom';

function Header() {

const name  = localStorage.getItem('name');
const photo  = localStorage.getItem('photo');



    return (
      <HeaderContainer>
        <HeaderLeft>
          <Link to='/'>
          <img src={'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'} alt="logoicon"/>
          </Link>
        </HeaderLeft>
        
        <HeaderSearch>
          <input placeholder="Search " type="text"/>
        </HeaderSearch>
      
      <HeaderRight>
      <Link to='/'> 
       <HomeOutlinedIcon/></Link>
       <Link to='/chats'> 
       <ChatOutlinedIcon/></Link>
       <Link to='/explore'> 
       <ExploreOutlinedIcon/></Link>
       <Link to='/activity'> 
       <FavoriteBorderOutlinedIcon/></Link>
       <Link to='/profile'> 
       <Avatar alt={name} src={photo} />
        </Link>
       


      </HeaderRight>
      
      
      </HeaderContainer>
      );
}

export default Header
