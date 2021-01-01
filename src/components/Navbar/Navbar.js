import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "../Link/Link.js";
import NavbarLink from "./NavbarLink.js";
import Logo from "../Logo/Logo.js";
import { usePageState, usePageDispatch } from "../../page-context.js";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>;
const StyledLogo = styled(Logo)``;
const Navbar_container = styled.div`
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  top: 0;
  z-index: 5;
`;
const Line = styled.div`
  width: 1px;
  height: 60px;
  background-color: #a9a9a9;
  margin: 10px;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Navbar = (props) => {
  const { page } = usePageState();
  console.log(page);
  let home, about, blog;
  if (page === "home") {
    home = true;
    about = false;
    blog = false;
  } else if (page === "about") {
    about = true;
    home = false;
    blog = false;
  } else if (page === "blog") {
    blog = true;
    home = false;
    about = false;
  } else if (page === undefined) {
    console.log("page context is undefined");
  }
  return (
    <Navbar_container>
      <StyledLogo />
      <Nav>
        <Link active={home} link="/" linkName="Home">
          Home
        </Link>
        <Line></Line>
        <Link active={about} id="changeColor" link="/AboutMe" linkName="About">
          About Me
        </Link>
        <Line></Line>
        <Link active={blog} id="changeColor" link="/Blog" linkName="Blog">
          Blog
        </Link>
      </Nav>
    </Navbar_container>
  );
};

export default Navbar;
