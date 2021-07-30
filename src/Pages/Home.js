import React from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function Home() {
  return (
    <HomeContainer>
      This is Home Conatainer
      <AddPost>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </AddPost>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;

const AddPost = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;
