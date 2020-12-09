import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Link from '../Link/Link.js';
import NavbarLink from './NavbarLink.js'
import Logo from '../Logo/Logo.js'
import PropTypes from 'prop-types'
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
</style>
const Navbar_container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
background-color: #3aafa9;
top:0;
// opacity: 50%;
top: 0;
z-index:100;
height: ${props => props.home ? "30" : "10"}vh;
//flex-wrap: wrap;
// border-bottom: 2px solid black;
// padding-left: 25%;
// padding-right: 25%;
// height: 100%;
// border-bottom: 2px solid ;
transition: 2s;
`;
Navbar_container.propTypes = {
    home: PropTypes.bool
}
Navbar_container.defaultProps = {
    home: true
}


const Navbar = (props) => {
    console.log("navbar height: " + props.home)
    const [page, setPage] = useState(props.home);

    useEffect(() => {
        setPage(props.home)
        });
    
    return (
        <Navbar_container home={page}>
            <StyledLogo/>
            <Link link="/" linkName="home" >Home</Link>
            <Link link="/" linkName="skills" >Skills</Link>
            <Link link="/" linkName="projects" >Projects</Link>
            <Link link="/" linkName="blog" >Blog</Link>
        </Navbar_container>
    )
}



//import logo from './components/logo'
//import styles from './header.module.scss'

const  Navbar_link = styled(NavbarLink)`
    position: absolute;
    
`;

const StyledLogo = styled(Logo)`
    
`
export default Navbar
