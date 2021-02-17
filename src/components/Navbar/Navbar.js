import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "../Link/Link.js";
import Logo from "../Logo/Logo.js";
import { useRouter } from 'next/router'
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
  const router = useRouter()
  return (
    <Navbar_container>
      <StyledLogo />
      <Nav>
        <Link href="/">
          Home
        </Link>
        <Line></Line>
        <Link href="/about">
          About Me
        </Link>
        <Line></Line>
        <Link href="/blog">
          Blog
        </Link>
      </Nav>
    </Navbar_container>
  );
};

export default Navbar;
