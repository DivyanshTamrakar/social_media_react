import styled from "styled-components";

export const placeholder = "https://i.stack.imgur.com/y9DpT.jpg";

export const Post = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
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
  width: 25rem;
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-between;
  margin-bottom: 10px;
  > .MuiSvgIcon-root {
    color: grey;
    cursor: pointer;
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
    border: 1px solid black;
    height: 22rem;
    margin-bottom: 5px;
  }
`;
