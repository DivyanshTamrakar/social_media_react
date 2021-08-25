import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import React from "react";

function Load() {
  return (
    <LoaderContainer>
      <Loader type="Oval" color="#00BFFF" height={50} width={80} />
    </LoaderContainer>
  );
}

export default Load;

const LoaderContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
