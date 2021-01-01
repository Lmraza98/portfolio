import React, { Component } from "react";
import styled from "styled-components";

const NavbarLink = (props) => {
  return (
    <StyledLink_container>
      <StyledLink>{props.linkName}</StyledLink>
      <Navbar_tab className="Navbar_tab" />
    </StyledLink_container>
  );
};

const Navbar_tab = styled.nav`
  display: none;
  border: 2px solid black;
`;
const StyledLink = styled.a`
  top: 0;
  left: 0;
  color: #fffacd;
  font-family: "Source Code Pro", monospace;
  font-size: 35px;
  position: relative;
  z-index: 5;
`;

const StyledLink_container = styled.div`
  // position: absolute;
  // margin-top: 20px;
  .StyledLink:hover + .Navbar_tab {
    // display:block;
    // z-index:6;
    // background-color: white;
    // //margin-top: -50px;
    // border-bottom: 2px solid black;
    // // shift
  }
`;
export default NavbarLink;
