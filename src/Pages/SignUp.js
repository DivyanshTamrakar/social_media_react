import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./profile.css";
export const HideLinkUnderline = { textDecoration: 'none' ,color:'black'};
export const GoToRegisterPageLink ={display:'inline',fontWeight:'500',textAlign:'left',cursor:'pointer'}



function SignUp() {


    const [UserDetails,setUserDetails] = useState({
        fullName:'',
        email:'',
        password:'',
        mobile:''
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
        console.log(newRecord);
            }
    
    
      }
    


    return (
        <div>
            <form action="" onSubmit={SubmitHandler}>
              <div className="form-frame signup">
                <span>Sign Up</span>
                <div>
               <label>Full Name </label>
               <input 
                  type="text" 
                  value={UserDetails.fullName}
                  onChange={InputChangehandler}
                  name="fullName"
                  autoComplete="off"
                 placeholder="Enter Full Name "/>
              </div>    
               
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
                  <label>Mobile No </label>
                  <input 
                    type="number" 
                    value={UserDetails.mobile}
                    onChange={InputChangehandler}
                    name="mobile" 
                    autoComplete="off"
                    placeholder="Enter mobile no"/>
              </div>    

              <div>
                 <section>
                     <input type="checkbox" name="remember"/>
                     <label style={{fontWeight:'700'}}> Remember me</label>
                 </section>
              </div>
       
              <div> <button type="submit">SignUp</button> </div>

              <div  style={GoToRegisterPageLink}> 
              <Link to='/profile' style={HideLinkUnderline}>
              Already Having Account ?<span style={{color:'#3498db',display:'inline'}}> SignIn</span>
              </Link>
              </div>
       
       
        </div>
    
       </form>
       
       
        </div>
    )
}

export default SignUp
