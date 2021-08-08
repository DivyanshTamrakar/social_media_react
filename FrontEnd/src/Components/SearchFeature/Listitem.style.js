import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  width: 230px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  > img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`;
