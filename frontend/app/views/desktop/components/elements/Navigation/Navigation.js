import React, { useContext, useState, useEffect } from "react";
import Logo from "../Logo";
import ThemeToggle from '../ThemeToggle'
import styled from 'styled-components'
import { ScrollLink, scroller } from '../ScrollLink'
import Transition from '../Transition'
import { GlobalContext } from '../../../../../contexts/GlobalContext'
import useScrollPos from '../../../../../hooks/useScrollPos'

const Navbar_container = styled.div`
  width: 100%;
  align-content: center;
  // background-color: rgba(255, 255, 255, .15);  
  // background-color: ${props => props.theme.backgroundColor};
  // backdrop-filter: blur(5px);
  height: 100%;
  // top: 0;
  // position: sticky;
  z-index: 1;
`;

const NavGrid = styled.div`
  height: 64px;
  width: 100%;
  display: inline-grid;
  align-items: center;
  grid-template-columns: 20% repeat(6, 1fr) 15%;
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

const Desktop_Navbar = ({theme}) => {
  const { mounted } = useContext(GlobalContext)
  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 200ms ease-in'
  })
  
  return (
    <Navbar_container style={{ ...headerStyle}}>
      <Transition toggle={scroll.visible}>
        <NavGrid>
            <LogoGridItem>
            <ScrollLink name="greetings">
              <Logo/>
              </ScrollLink>
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
      </Transition>
    </Navbar_container>
  );
};

export { Desktop_Navbar };
