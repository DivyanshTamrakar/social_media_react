import styled from "styled-components";

export const LoginContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
export const LoginForm = styled.div`
  text-align: left;
  padding: 15px;
  width: 20rem;
  height: 23rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  > form {
    display: flex;
    flex-direction: column;

    > small {
      font-weight: 600;
      color: orangered;
      font-size: small;

      margin-left: 5px;
    }

    > label {
      font-weight: 800;
      margin: 5px;
    }
    > Button {
      margin: 5px;
      margin-top: 15px;
    }
  }

  > small {
    cursor: pointer;
  }
`;
