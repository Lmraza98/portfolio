import React, { useState, useEffect, useRef } from "react";

import Logo from "./Logo.js";
import { useRouter } from 'next/router'
import Navlist from './Navlist.js'
import Sidebar from "../Sidebar.js"
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>;



const Navbar = (props) => {
    const [ sidebarOpen, onSetSidebarOpen ] = useState(false)
  return (
    <Sidebar
        sidebar={<Navlist></Navlist>}
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        shadow={true}
        styles={{ sidebar: { background: "white", opacity: 1 } 
        
        }
        
        }
        docked={false}
    >
        <button onClick={() => onSetSidebarOpen(!sidebarOpen)}>
          Open sidebar
        </button>
        
      
        
      
    </Sidebar>
    
  );
};

export default Navbar;
