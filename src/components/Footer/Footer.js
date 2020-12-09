import React, { Component } from 'react'
import Link from '../Link/Link.js'
import styled from 'styled-components'
//import logo from './components/logo'
//import styles from './header.module.scss'
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
</style>

const StyledFooter_link = styled(Link)`


    text-decoration: none;
`
const Footer_container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index:100;
    background-color: #3aafa9;
    //opacity: 50%;
    // border-top: 2px solid black;
    
`;
const  Footer_link = styled.a`
    color: white;
    font-family: 'Source Code Pro', monospace;
    font-size: 40px;
    text-decoration: none;
    // margin: 50px;
    
`;
const  Footer_info = styled.div`
width: 200px;
color: white;
`;
const Footer = () => {
    return (
            
        <Footer_container>
            
            <StyledFooter_link link='/skills'>
            contact me
            </StyledFooter_link>
            <Footer_info>
                
            </Footer_info>
            {/* {this.props.children} */}
            
        </Footer_container>
        
    )
}
export default Footer