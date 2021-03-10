import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "./Link.js";
import Logo from "./Logo.js";
import { useRouter } from 'next/router'
import Sidebar from "react-sidebar"
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>;

const Sidebar_container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center;

    // padding-top: 50px;
`

const Navbar = (props) => {
    const [ sidebarOpen, onSetSidebarOpen ] = useState(true)
  return (
    <Sidebar
        sidebar={<Sidebar_container><Link href="/">
        Home
      </Link>
      <Link href="/about">
        About Me
      </Link>
      
      <Link href="/blog">
        Blog
      </Link></Sidebar_container>}
        pullRight={true}
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }
        }
    >
        <button onClick={() => onSetSidebarOpen(!sidebarOpen)}>
          Open sidebar
        </button>
        
      
        
      
    </Sidebar>
    
  );
};

export default Navbar;
