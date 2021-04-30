import React, { useState, useEffect } from "react";
import PageLink from "../../elements/PageLink";
import Logo from "../../elements/Logo";
import ThemeToggle from '../../elements/ThemeToggle'
import styled from 'styled-components'
import { ScrollLink, scroller } from '../../elements/ScrollLink'

const Navbar_container = styled.div`
  width: 100%;
  align-content: center;
  background-color: ${props => props.theme.backgroundColor};
  height: 75px;
`;

const NavGrid = styled.div`
  height: 64px;
  width: 100%;
  display: inline-grid;
  align-items: center;
  grid-template-columns: repeat(9, 1fr);
`;

const LogoGridItem = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  justify-self: center;
`
const AboutLinkGridItem = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  justify-self: center;
  
`
const ExperienceLinkGridItem = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  justify-self: center;
`
const WorkLinkGridItem = styled.div`
  grid-column-start: 5;
  grid-column-end: 6;
  justify-self: center;
`
const ContactLinkGridItem = styled.div`
  grid-column-start: 6;
  grid-column-end: 7;
  justify-self: center;

`
const ThemeToggleGridItem = styled.div`
  grid-column-start: 8;
  grid-column-end: 9;
  justify-self: center;
`


const Desktop_Navbar = (props) => {
  return (
    <Navbar_container>
      <NavGrid>
        <LogoGridItem>
          <Logo/>
        </LogoGridItem>
        <AboutLinkGridItem>
          <ScrollLink name="about">
            About Me
          </ScrollLink> 
        </AboutLinkGridItem>
        <ExperienceLinkGridItem>
            <ScrollLink name="experience">
              Experience
            </ScrollLink>
        </ExperienceLinkGridItem>
        <WorkLinkGridItem>
            <ScrollLink name="work">
              Work
            </ScrollLink>
        </WorkLinkGridItem>
        <ContactLinkGridItem>
            <ScrollLink name="contact">
              Contact
            </ScrollLink>
        </ContactLinkGridItem>
        <ThemeToggleGridItem>
          <ThemeToggle/>
        </ThemeToggleGridItem>
      </NavGrid>
    </Navbar_container>
  );
};

export { Desktop_Navbar };
