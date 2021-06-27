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
  top: 0;
  left: 0;
  // position: sticky;
  z-index: 1;
  justify-content: space-between;
  transition: ease-out;
`;

const Desktop_Navbar = ({theme}) => {
  const [state, dispatch] = useContext(GlobalContext)
  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 200ms ease-in'
  })

  const menu = state.navigation

  const greetings = menu[0].greetings
  const about = menu[1].about
  const work = menu[2].work
  const contact = menu[3].contact
  console.log(menu)

  if(greetings)
  {

    return (
      <Navbar_container style={{ ...headerStyle}}>
          <ScrollLink style={{ ...headerStyle}} name="about">
            LUCASRAZA
          </ScrollLink> 
      </Navbar_container>
    );
  
  }else if(about){
    return (
      <Navbar_container style={{ ...headerStyle}}>
          <ScrollLink style={{ ...headerStyle}} name="about">
            ABOUT
          </ScrollLink> 
      </Navbar_container>
    );
  
  }else if(work){
    return (
      <Navbar_container style={{ ...headerStyle}}>
          <ScrollLink name="about">
            WORK
          </ScrollLink> 
      </Navbar_container>
    );
  
  }else if(contact)
  {
    return (
      <Navbar_container style={{ ...headerStyle}}>
          <ScrollLink name="about">
            CONTACT
          </ScrollLink> 
      </Navbar_container>
    );
  
  }else{
    return (
      <Navbar_container style={{ ...headerStyle}}>
          <ScrollLink name="about">
            LUCASRAZA
          </ScrollLink> 
      </Navbar_container>
    );
  }
  
};

export { Desktop_Navbar };
