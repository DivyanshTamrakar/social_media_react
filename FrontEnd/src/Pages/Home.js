import React from "react";
import styled from "styled-components";
import AddPost from "../Components/Addpost.model";

function Home() {
  return <HomeContainer>This is Home page 
    <AddPost/>
  </HomeContainer>;
}

export default Home;

const HomeContainer = styled.div``;
