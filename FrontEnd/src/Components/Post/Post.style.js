import styled from "styled-components";
export const LeftSection = styled.div``;

export const PostSection = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  height: max-content;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  > time {
    text-align: left;
    padding: 0px 0px 5px 15px;
    font-weight: 600;
    font-size: 13px;
    color: grey;
  }
`;
export const RightSection = styled.div`
  flex: 0.5;
  display: flex;
  height: 10rem;
  width: 5rem;
  background-color: black;
`;

export const HeadArea = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 15px 15px 0px 0px;
  padding: 5px;
  > .MuiAvatar-root {
    margin-left: 15px;
  }
  > h4 {
    margin-left: 15px;
  }
`;

export const ActionArea = styled.div`
  height: 20px;
  display: flex;
  padding: 15px 15px 0px 15px;
  align-items: center;

  > .MuiSvgIcon-root {
    font-size: 30px;
    cursor: pointer;
    margin-right: 15px;
  }
`;

export const Caption = styled.div`
  height: max-content;
  padding: 15px 15px 5px 15px;
  display: flex;
  align-items: center;
  > span {
    font-weight: 400;
    margin-left: 10px;
  }
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > input {
    flex: 0.8;
    margin: 5px;
    padding: 10px;
    outline: none;
    border: none;
    background-color: transparent;
  }
  > .MuiButton-root {
    border: none;
    margin-right: 10px;
  }
`;


export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
`;

