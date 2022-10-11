import React from "react";
import styled from "styled-components";
import AddPost from "../components/PopupModal/Addpost.model";
import PostComponent from "../components/Post/PostComponent";

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
