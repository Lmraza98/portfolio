import React, { useState } from "react";
import nextLink from "next/link";
import { useRouter } from 'next/router'
import {StyledLink} from './styled.js'

const Link = ({ children, href }) => {
  const router = useRouter()
  // console.log(props.active)
  const handleClick = (e) => {
    // console.log("clicked " + props.linkName)
    router.push(href)
  };

  return (
      <StyledLink onClick={handleClick} href={href}>
        {children}
      </StyledLink>
  );
};
export { Link };
