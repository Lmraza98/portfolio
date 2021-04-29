import React, { useState, useEffect } from "react";
import PageLink from "../../elements/PageLink";
import Logo from "../../elements/Logo";
import { theme, ThemeContext } from '../../../../shared/styles/ThemeContext/ThemeContext.js'
import ThemeToggle from '../../elements/ThemeToggle'
import styled from 'styled-components'

const Navbar_container = styled.div`
  width: 100%;
  align-content: center;
  background-color: ${props => props.theme.backgroundColor};
`;

const NavGrid = styled.div`
  height: 64px;
  width: 100%;
  display: inline-grid;
  align-items: center;
  grid-template-columns: repeat(9, 1fr);
`;

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
      <NavGrid>
        <HomeLinkGridItem>
          <PageLink href="/home">
            Home
          </PageLink>
        </HomeLinkGridItem>
        <AboutLinkGridItem>
          <PageLink href="/about">
            About Me
          </PageLink> 
        </AboutLinkGridItem>
        <BlogLinkGridItem>
            <PageLink href="/blog">
              Blog
            </PageLink>
        </BlogLinkGridItem>
        <ThemeToggle/>
      </NavGrid>
    </Navbar_container>
  );
};

export { Desktop_Navbar };
