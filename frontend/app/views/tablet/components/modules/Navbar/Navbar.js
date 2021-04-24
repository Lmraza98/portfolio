import React, { useState, useEffect } from "react";
import Link from "../../elements/Link";
import Logo from "../../elements/Logo";
import {Line} from '../../elements/Line';
import { Navbar_container, Nav } from './styled'
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>;
function Desktop_Navbar(props) {
  return (
    <Navbar_container>
      <Logo />
      <Nav>
        <Link href="/">
          Home
        </Link>
        <Line></Line>
        <Link href="/about">
          About Me
        </Link>
        <Line></Line>
        <Link href="/blog">
          Blog
        </Link>
      </Nav>
    </Navbar_container>
  );
};

export { Desktop_Navbar };
