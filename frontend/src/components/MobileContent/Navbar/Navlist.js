import React from 'react'
import styled from "styled-components";
import Link from "./Link.js";

const Sidebar_container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center;

    // padding-top: 50px;
`

export default function Navlist() {
    return (
        <Sidebar_container><Link href="/">
        Home
      </Link>
      <Link href="/about">
        About Me
      </Link>
      <Link href="/blog">
        Blog
      </Link></Sidebar_container>
    )
}
