import React from "react";
import styled from "styled-components";
import AddPost from "../Components/Addpost.model";
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { data } from "../Data/data";

function Home() {
  return (
    <HomeContainer>
      <LeftSection>
        {data.map((element) => {
          return (
            <PostSection>
              <HeadArea>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <h4>{element.username}</h4>
              </HeadArea>
              <img
                src={"https://i.stack.imgur.com/y9DpT.jpg"}
                alt={"divy"}
                height="400px"
                width="100%"
              />
              <ActionArea>
                <FavoriteBorderIcon />
                <ChatBubbleOutlineIcon />
                <BookmarkBorderIcon />
              </ActionArea>
            </PostSection>
          );
        })}
      </LeftSection>

      <RightSection></RightSection>
      <AddPost />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
`;


const LeftSection = styled.div`
  
`;

const PostSection = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  height: max-content;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const RightSection = styled.div`
  flex: 0.5;
  display: flex;
  height: 10rem;
  width: 5rem;
  background-color: black;
`;

const HeadArea = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 15px 15px 0px 0px;
  padding: 5px;
  /* background-color: brown; */
  > .MuiAvatar-root {
    margin-left: 15px;
  }
  > h4 {
    margin-left: 15px;
  }
`;

const ActionArea = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  background-color: chocolate;
`;
