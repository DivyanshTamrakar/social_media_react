import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  z-index: 2;
  top: 0;
  right: 0;
  gap: 15px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  background-color: #ffae00;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    position: sticky;
    z-index: 2;
    top: 0;
    right: 0;
    gap: 5px;
    padding: 2px;
    align-items: center;
    justify-content: center;
    background-color: #ffae00;
    position: relative;
  }
`;

export const HeaderLeft = styled.div`
  flex:0.5;
  margin: 0px 25px 0 5px;
  font-weight: 800;
  font-size: 30px;
  color: white;
  text-shadow: 2px 2px 5px gray;

  > img {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex: 0;
    margin: 0;
    font-weight: 800;
    font-size: 15px;
    color: white;
    text-shadow: 2px 2px 5px gray;
  }
`;

export const HeaderSearch = styled.div`
  flex: 1;
  flex-grow: 2;
  opacity: 0.5;
  background-color: white;
  border-radius: 5px;
  align-self: center;
  margin-left: 20px;

  @media (max-width: 768px) {
    flex: 0.5;
    flex-grow: 0;
    opacity: 0.5;
    background-color: white;
    border-radius: 5px;
  }
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 5%;
  .MuiSvgIcon-root {
    font-size: 35px;

  }
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const SearchResult = styled.div`
  position: absolute;
  top: 50px;
  background-color: white;
  opacity: 1;
`;

