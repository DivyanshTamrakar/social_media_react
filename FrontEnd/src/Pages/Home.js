import React from "react";
import styled from "styled-components";
import AddPost from "../Components/PopupModal/Addpost.model";
import PostComponent from "../Components/Post/PostComponent";

function Home() {
  return (
    <HomeContainer>
      <PostComponent />
      <AddPost />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;
