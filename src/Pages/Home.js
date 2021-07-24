import React from 'react';
import { data } from '../Data/data';
import TimeAgo from 'react-timeago'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart,faComment as farComment,faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons'

function Home() {
    return (
        <div className="HomeLayout">
            <div className="post-section">
            {
            data.map(function(item){
                return (
                    <div key={item.id} className="Post-Frame">

            <div className="profile-header">

                <div style={{display:'flex'}}>
                <img src={"https://image.flaticon.com/icons/png/512/456/456212.png"} alt={'profile'} height="20px" width="20px"/>
                <span style={{display:'block' ,marginLeft:'0.8rem'}}>
                <h5>{item.username}</h5>
                <h6 className="text-alignL">{"location"}</h6>
                </span>
                </div>
       
                <span className="cursor" style={{marginRight:'1rem'}}>
                <FontAwesomeIcon icon={faEllipsisH} size='lg' />
                </span>
           
           
            </div>

            <div>
                <img src="https://images.unsplash.com/photo-1625486121060-3941d0d1ecf6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=355&q=80" alt="posts" height="10%" width='100%'/>
            </div>
            <div className="reaction-icons padding">

                <div style={{display:'flex' ,justifyContent:'space-between',width:'3.5rem'}}>
                    <FontAwesomeIcon className="cursor" icon={farHeart} size='lg' />
                    <FontAwesomeIcon className="cursor" icon={farComment} flip="horizontal" size='lg' />
                </div>

                <div>
                    <FontAwesomeIcon className="cursor" icon={farBookmark} size='lg'/>

                </div>




            </div>
            
            <div className='likes padding text-alignL'>
              <b>0 likes</b>
            </div>

            <div className='username-caption padding text-alignL'>
                <b>{item.username}</b> {item.caption}

            </div>
        
        <div className="padding text-alignL">
            <TimeAgo date={item.time} live={true}/>
        </div>
        
        </div>
                );

            })
            }
            </div>
            



            <div className="profile_Right">
          
          
            <div style={{display:'flex',alignItems:'center' }}>
                <img src={"https://image.flaticon.com/icons/png/512/456/456212.png"} alt={'profile'} height="40px" width="40px"/>
                <span style={{display:'block' ,marginLeft:'1rem'}}>
                <h5>username</h5>
                <h6 className="text-alignL">{"Full Name "}</h6>
                </span>
                </div>        

           <div type="card">
               <span className='card cursor' >
                   0 posts

               </span>
               <span className='card cursor'>
                   0 follower

               </span>
               <span className='card cursor'>
                   0 following

               </span>
           </div>

            </div>








        </div>
    )
}

export default Home
