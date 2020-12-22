import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components'
import {useSpring, animated, config} from 'react-spring'
import { usePageState } from '../../page-context.js'
//Define spring

// import styles from './MainContent.css'
const Main_container = styled.div`

`
const Content = styled(animated.div)`
    // width: 100%;
    // height: 100%;
    color: black;
    background-color: black;
    align-text: center;
    // display: ${props => props.page ==="home" ? "none" : "flex"};
    // visibility: 
    // display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-right: 5%;
    z-index: 100;
    height: 100%;
    background-color: white;
    z-index:1;

`
const MainContent = ({page}) => {
//const [page, setPage] = useState(props.page);
// const page = usePageState();
    // useEffect(() => {
        //     setPage(props.page)
        // });
    const transitions = useSpring(
        {   config: { tension: 70 },
            from: {transform: "translateY(-120%)", opacity: 0,},
       to: { transform: "translateY(0)",opacity: 1}, delay:0 
        
     })
       
    return (
         
      
          <Content page = {page} style={transitions}>Hello</Content>
    )
}
export default MainContent
