import React, { Component } from "react";
import nextImage from "next/image";
import styled from "styled-components";
const Image___hover = styled.img`
  &:hover {
    z-index: 200;
    transform: scale(1.2);
  }
`;

const StyledIcon = styled.div`
  // height: 100px;
  // width:100px;
`;
const Icon = (props) => {
  return (
    <StyledIcon>
      <Image___hover
        width="50"
        height="50"
        src={"/icons/" + props.name}
      ></Image___hover>
    </StyledIcon>
  );
};
export default Icon;
