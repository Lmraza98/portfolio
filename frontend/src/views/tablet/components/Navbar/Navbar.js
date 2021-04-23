import React, { useState, useEffect, useRef } from "react";

import Logo from "../Logo";
import { useRouter } from 'next/router'
import Navlist from './Navlist/Navlist'
import Sidebar from "../Sidebar"

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
