import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faHome,faCompass,faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from  'react-router-dom';

function Header() {
    return (
        <div className="Header">
          <div>
            <Link to='/'><img className="cursor" src={"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"} alt={"logo"}/></Link>
          </div>
          
          <div className="input-search">
              <input type="search" placeholder="Search"/>
          </div>
          
          <div className="icon-box">
             <Link  to='/' className='text-decoration-none color-black'> <FontAwesomeIcon className="cursor home-hover" icon={faHome} size='lg'   /></Link>
             <Link to='/chats' className='text-decoration-none color-black'><FontAwesomeIcon className="cursor messenger-hover" icon={faFacebookMessenger} size='lg'  /></Link>
             <Link to='/explore' className='text-decoration-none color-black'><FontAwesomeIcon className="cursor compass-hover" icon={faCompass} size='lg' aria-hidden='true'/></Link>
             <Link to='/activity' className='text-decoration-none color-black'> <FontAwesomeIcon className="cursor heart-hover" icon={faHeart}  size='lg' /></Link>
             <Link to='/profile' className='text-decoration-none color-black'><img src={"https://image.flaticon.com/icons/png/512/456/456212.png"} alt={'profile'} height="20px" width="20px"/></Link>
          </div>

        </div>
    )
}

export default Header
