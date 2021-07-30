import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
`;

export const ImageAvatar = styled.div`
  display: flex;
  width: 45%;
  height: 200px;
  justify-content: flex-end;
  align-items: center;
  > .MuiAvatar-root {
    height: 150px;
    width: 150px;
    margin-right: 40px;
  }
`;

export const Details = styled.div`
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  align-items: flex-start;
  height: 20rem;

  > .MuiButton-root {
    width: 100%;
    padding: 0.5px;
    color: grey;
    border-color: black;
    text-transform: none;
    margin: 20px 0 0 0;
  }
`;

export const Username = styled.div`
  text-align: left;

  > h3 {
    font-weight: 200;
    font-size: 45px;
    margin: 0 0 5px 0;
  }
  > h4 {
    font-weight: 700;
    margin: 0 0 10px 0;
  }
`;

export const FollowDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > h4 {
    font-weight: 400;
  }
`;

export const Bio = styled.div`
  text-align: left;
  max-width: 50%;
  margin: 15px 0 0 0;
`;

export const PopupContent = styled.div`
  height: max-content;
  padding: 10px;
  > form {
    display: flex;
    flex-direction: column;

    > .MuiAvatar-root {
      align-self: center;
      height: 100px;
      width: 100px;
      cursor: pointer;
    }
  }
`;
