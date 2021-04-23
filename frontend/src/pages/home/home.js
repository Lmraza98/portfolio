import React from "react";

import Image from "next/image";
import React from "react";
import dynamic from 'next/dynamic';

import Main_container from './styled.js';

import Desktop_Navbar from '../../views/desktop/components/Navbar/Navbar.js';
import Mobile_Navbar from '../../views/mobile/components/Navbar/Navbar.js';

const Home = (props) => {
  isMobile ? 
    <Main_container>
      <Mobile_Navbar/>
    </Main_container> 
  : 
    <Main_container>
      <Desktop_Navbar/>
    </Main_container>
};

export default Home;
