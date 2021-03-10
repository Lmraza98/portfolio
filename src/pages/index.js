import Image from "next/image";
import styled from "styled-components";
import React from "react";
import Desktop_Navbar from '../components/DesktopContent/Navbar/Navbar.js'
import Mobile_Navbar from '../components/MobileContent/Navbar/Navbar.js'
import dynamic from 'next/dynamic'
import {
  isBrowser,
  isMobile
} from "react-device-detect";


const Main_container = styled.div`
  display: grid;
`
const Home = (props) => {
  
  if(isMobile)
  {
    console.log('is mobile')
    return <Main_container>
    <Mobile_Navbar/>
   </Main_container>
  }else{
    return <Main_container>
            <Desktop_Navbar/>
           </Main_container>
  }
};

export default Home;
