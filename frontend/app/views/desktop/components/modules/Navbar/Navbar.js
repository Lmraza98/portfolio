import React, { useState, useEffect } from "react";
import Link from "../../../../shared/components/elements/Link";
import Logo from "../../elements/Logo";
import { Line } from '../../elements/Line';
import styled from "styled-components";
import GlobalStyles from '.'

const Navbar_container = styled.div`
  width: 100%;
  align-content: center;
  background-color: #013948;
  padding: 5px;
`;

const Nav = styled.div`
  height: 64px;
  width: 100%;
  display: inline-grid;
  align-items: center;
  grid-template-columns:  100px 300px auto 100px 100px 100px 100px;
  grid-template-rows: 100%;
`;
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>;

const LogoGridItem = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: center;
`
const HomeLinkGridItem = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  justify-self: center;
`
const AboutLinkGridItem = styled.div`
  grid-column-start: 5;
  grid-column-end: 6;
  justify-self: center;
`
const BlogLinkGridItem = styled.div`
  grid-column-start: 6;
  grid-column-end: 7;
  justify-self: center;
`

const Desktop_Navbar = (props) => {
  return (
    <Navbar_container>
      <Nav>
        {/* <LogoGridItem>
          <Logo />
        </LogoGridItem> */}
        <HomeLinkGridItem>
          <Link href="/">
            Home
          </Link>
        </HomeLinkGridItem>
        <AboutLinkGridItem>
          <Link href="/about">
            About Me
          </Link> 
        </AboutLinkGridItem>
        <BlogLinkGridItem>
          <Link href="/blog">
            Blog
          </Link>
        </BlogLinkGridItem>
      </Nav>
    </Navbar_container>
  );
};

export { Desktop_Navbar };
