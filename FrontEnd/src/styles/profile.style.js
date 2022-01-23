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
    @media only screen and (max-width: 768px) {
      margin-right: 15px;
   
  }


  }
  @media only screen and (max-width: 768px) {
      margin-left: 10px;
   
  }
`;

export const Details = styled.div`
   
  display: flex;
  flex-direction: column;
  width: max-content;
  margin-top: 15px;
  margin-bottom: 20px;
  align-items: flex-start;
  height: max-content;

  > .MuiButton-root {
    width: 100%;
    padding: 0.5px;
    color: grey;
    border-color: black;
    text-transform: none;
    margin: 20px 0 0 0;
    @media only screen and (max-width: 768px) {
      width: 150px;
  }
  }
`;

export const Username = styled.div`
  text-align: left;
  > h3 {
    font-weight: 700;
    font-size: 45px;
    margin: 0 0 5px 0;
    @media only screen and (max-width: 768px) {
      font-weight: 700;
       font-size: 30px;

  }
  }
  > h4 {
    font-weight: 500;
    margin: 0 0 10px 0;
  }
`;

export const FollowDetails = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h4 {
    font-weight: 600;
  }
  @media only screen and (max-width: 768px) {
    width: 200px;
    
}
`;

export const Bio = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  max-width: 55%;
  margin: 10px 0 0 0;
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

export const ProfileImage = styled.div`
  position: relative;
  > .MuiSvgIcons-root {
    position: absolute;
    top: 0;
  }

  > center {
    > input {
      display: none;
    }

    > .MuiAvatar-root {
      align-self: center;
      height: 100px;
      width: 100px;
      cursor: pointer;
    }
  }
`;
export const FollowButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  > .MuiButton-root {
    margin-top: 15px;
    font-weight: bolder;
  }
`;
