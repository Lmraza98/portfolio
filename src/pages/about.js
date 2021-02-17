import styled from 'styled-components'
import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import { usePageState, usePageDispatch } from "../page-context.js";

const About_container = styled.div`
`
function About() {
    const { page } = usePageState();
    console.log(page);

    return(
        <About_container>
            <Navbar></Navbar>
        </About_container>
    )
    
}
export default About