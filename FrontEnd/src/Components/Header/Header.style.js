import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  z-index: 5;
  top: 0;
  right: 0;
  gap: 2px;
  align-items: center;
  justify-content: center;
  background-color: #ffae00;
`;

export const HeaderLeft = styled.div`
  flex: 0.3;
  flex: 1;
  margin-left: 5px;
  
  > img {
    cursor: pointer;
  }
`;

export const HeaderSearch = styled.div`
  flex: 0.4;
  flex-grow: 2;
  opacity: 0.5;
  background-color: white;
  border-radius: 5px;
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  gap: 5%;
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
  top: 9%;
  z-index: 5;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
