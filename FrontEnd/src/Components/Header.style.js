import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 5px 0;
  border: 0.1px solid grey;
  background-color: white;
`;

export const HeaderLeft = styled.div`
  flex: 0.4;
  align-items: center;
  > img {
    cursor: pointer;
  }
`;

export const HeaderSearch = styled.div`
  flex: 0.2;
  display: flex;
  opacity: 1;

  text-align: center;
  color: gray;
  border: 1px solid gray;
  > input {
    border: none;
    background-color: transparent;
    text-align: center;
    outline: 0;
    color: black;
    min-width: 30vw;
    padding: 3px 0;
  }
`;

export const HeaderRight = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 50px;
  justify-content: space-evenly;
  > Link {
    text-decoration: none;
  }

  > .MuiSvgIcon-root {
    text-decoration: none;
  }
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProfileDetails = styled.div`
  display: flex;
  border: none;
  align-items: center;
  margin: 10px 45px;
  justify-content: space-around;
  cursor: pointer;
`;

export const UnderlineHide = {
  textDecoration: "none",
  color: "black",
  
};
