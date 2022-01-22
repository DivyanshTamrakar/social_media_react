import styled from "styled-components";

export const placeholder = "https://i.stack.imgur.com/y9DpT.jpg";

export const Post = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  display: block;

  @media only screen and (max-width: 768px) {
    position: fixed;
    bottom: 15px;
    right: 15px
  }
`;

export const ComposePost = styled.div`
  display: flex;
  flex-direction: column;
  > .MuiButtonBase-root {
    margin-top: 10px;
  }
`;

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  > .MuiSvgIcon-root {
    color: grey;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 10px;
    > .MuiSvgIcon-root {
      color: black;
      cursor: pointer;
    }
  }
`;

export const Caption = styled.div`
  > textarea {
    margin-top: 10px;
    height: 50px;
    width: 100%;
    outline: none;
    border: none;
    font-size: large;
    font-weight: bold;
  }
`;

export const contentstyle = {
  borderRadius: "14px",
  padding: "10px",
};

export const AddImage = styled.div`
  display: flex;
  flex-direction: column;

  > input {
    display: none;
  }

  > .MuiSvgIcon-root {
    position: absolute;
    right: 10px;
    z-index: 3;
    color: white;
    cursor: pointer;
  }
  > img {
    border: 0.5px solid grey;
    height: 45%;
    margin-bottom: 5px;
  }
  
`;
