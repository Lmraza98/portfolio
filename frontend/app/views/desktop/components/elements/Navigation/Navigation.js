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
  // height: 100%;
  top: 0;
  left: 0;
  // position: sticky;
  z-index: 1;
  // justify-content: space-between;
  transition: opacity 1s ease-in;
`;




const Desktop_Navbar = ({theme}) => {
  const [state, dispatch] = useContext(GlobalContext)
  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 200ms ease-in'
  })
  const [nav, setNav] = useState([true, false, false, false])
  
  const menu = state.navigation
  let greetings = true
  let about = false
  let work = false
  let contact = false
  
  if(menu)
  {
    console.log(JSON.stringify(menu))
    if(menu.length > 0)
    {
      greetings = menu[0].greetings
      about = menu[1].about
      work = menu[2].work
      contact = menu[3].contact
      
      
    }
    
  }
  
  useEffect(() => {
    setNav([{"greetings": greetings},{"about": about},{"work": work},{"contact": contact},{"prev":[{"greetings": greetings},{"about": about},{"work": work},{"contact": contact}]}])
    // setMain([greetings, about, work, contact])
    // dispatch({type: 'SET_NAV', payload: [{"greetings": greetings},{"about": about},{"work": work},{"contact": contact}]})
  },[menu])
  const onMouseEnter = () => {
    setNav([{"greetings": true},{"about": true},{"work": true},{"contact": true},{"prev":[{"greetings": greetings},{"about": about},{"work": work},{"contact": contact}]}])
    
    // dispatch({type: 'SET_NAV', payload:[{"greetings": true},{"about": true},{"work": true},{"contact": true},{"prev":[{"greetings": greetings},{"about": about},{"work": work},{"contact": contact}]}]})
  }
  const onMouseLeave = () => {
    // if(menu)
    // {
    //   console.log(JSON.stringify(menu))
    //   if(menu.length > 0)s
    //   {
    //     greetings = menu[0].greetings
    //     about = menu[1].about
    //     work = menu[2].work
    //     contact = menu[3].contact
    //     setNav([greetings, about, work, contact])
    //   }
      
    // }
    
    setNav([{"greetings": nav[4].prev[0].greetings},{"about": nav[4].prev[1].about},{"work": nav[4].prev[2].work},{"contact": nav[4].prev[3].contact}])
  }
  
  // setNav([greetings, about, work, contact])
  
  return (
    <Navbar_container menu={menu}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ ...headerStyle}}
    >
      {
        (
          <>
          <ScrollLink show={greetings} main={nav[0].greetings} style={{ ...headerStyle}} name="about">
            GREETINGS
          </ScrollLink> 
          <ScrollLink show={about} main={nav[1].about} style={{ ...headerStyle}} name="about">
            ABOUT
          </ScrollLink> 
          <ScrollLink show={work} main={nav[2].work} name="work">
          WORK
          </ScrollLink>  
          <ScrollLink show={contact} main={nav[3].contact} name="contact">
            CONTACT
          </ScrollLink> 
            </>
            
          ) 
      }
        
    </Navbar_container>
    );
  

  
};

export { Desktop_Navbar };
