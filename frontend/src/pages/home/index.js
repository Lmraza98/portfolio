import React from "react";

import Image from "next/image";
import dynamic from 'next/dynamic';

import {Main_container} from './styled.js';

import Desktop_Navbar from '../../views/desktop/components/Navbar';
// import Mobile_Navbar from '../../views/mobile/components/Navbar/Navbar.js';

const Home = (props) => {
  return (
    <Main_container>
      <Desktop_Navbar/>
    </Main_container>
  )
    
};

export default Home;
