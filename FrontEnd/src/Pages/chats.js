import React from "react";
import styled from "styled-components";
import { useState } from "react";

function Chats() {
  const [profile, setprofile] = useState(null);


  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setprofile(reader.result);
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  return (
    <ChatContainer>
      <div>
        <img src={profile} alt="dsdf" />
      </div>
      <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
     
    </ChatContainer>
  );
}

export default Chats;

const ChatContainer = styled.div``;
