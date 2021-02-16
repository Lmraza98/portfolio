import React, { Component } from "react";
import Icon from "../Icon/Icon.js";
import styled from "styled-components";
const StyledIcon_container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  z-index: 100;
`;
const StyledIcon = styled(Icon)`
  position: relative;
  height: 100px;
  width: 100px;
  margin-left: 10px;
  margin-right: 10px;
`;

// const StyledIcon_circle___hover = styled(StyledIcon___hover)`

// `
const IconWheel = () => {
  return (
    <>
      <StyledIcon_container>
        <StyledIcon name="linkedin.png"></StyledIcon>
        <StyledIcon name="youtube.png"></StyledIcon>
        <StyledIcon name="github.png"></StyledIcon>
      </StyledIcon_container>
    </>
  );
};
export default IconWheel;
