import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./profile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { useAuth } from "../Context/AuthContext"
export const HideLinkUnderline = { textDecoration: 'none' ,color:'black'};
export const GoToRegisterPageLink ={display:'inline',fontWeight:'500',textAlign:'left',cursor:'pointer'}


function Profile() {

const {login,setLogin} = useAuth();
 
const [UserDetails,setUserDetails] = useState({
    email:'',
    password:''
  })
  
  function InputChangehandler(e){
    let name = e.target.name;
    let value = e.target.value;
    setUserDetails({...UserDetails,[name]:value})
  }
  
  function SubmitHandler(e){
    e.preventDefault()
    let newRecord = {...UserDetails};
    if((newRecord.email === '') && (newRecord.password === ''))
    {
      console.log("fill all fileds");
    } 
    else{
    //   LoginWithCredential(newRecord.email,newRecord.password);
    setLogin(true);
        }


  }

  function  Logouthandler(){
     console.log('logout functionality');
     setLogin(false);
 }


    return (
        <div>
            {  login === true 
       ? 
      <div className="ProfileFrame">

        <div className='Avatar'>
          <FontAwesomeIcon icon={faUser} color="white" size="5x"/>
        </div>
        <div className='Username'> {'Full Name'}</div>
        <div type='username'>Username</div>
        <div type="card">
               <span className='card cursor m-1' >
                   0 posts

               </span>
               <span className='card cursor m-1'>
                   0 follower

               </span>
               <span className='card cursor m-1'>
                   0 following

               </span>
           </div>



        <button className='logout cursor' onClick={Logouthandler}>Logout</button>
      </div>

       :  <form action="" onSubmit={SubmitHandler}>
              <div className="form-frame">
                <span>Sign In</span>

              <div>
               <label>Email address</label>
               <input 
                  type="text" 
                  value={UserDetails.email}
                  onChange={InputChangehandler}
                  name="email"
                  autoComplete="off"
                 placeholder="Enter email"/>
              </div>    
  
              <div>
                  <label>Password</label>
                  <input 
                    type="password" 
                    value={UserDetails.password}
                    onChange={InputChangehandler}
                    name="password" 
                    autoComplete="off"
                    placeholder="Enter password"/>
              </div>    

              <div>
                 <section>
                     <input type="checkbox" name="remember"/>
                     <label style={{fontWeight:'700'}}> Remember me</label>
                 </section>
              </div>
       
              <div> <button type="submit">Login</button> </div>

              <div  style={GoToRegisterPageLink}> 
              <Link to='/signup' style={HideLinkUnderline}>
              Not having account ?<span style={{color:'#3498db',display:'inline'}}> SignUp</span>
              </Link>
              </div>
       
       
        </div>
    
       </form>
       
       
       }
            
        </div>
    )
}

export default Profile
