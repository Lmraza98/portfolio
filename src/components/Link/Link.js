import nextLink from "next/link";
import { useRouter } from 'next/router'
import styled from "styled-components";
import React, { useState } from "react";


const StyledLink = styled.a`
  // color: white;
  color: ${(props) => (props.active ? "#0AD1A1" : "#CACACA")};
  font-family: "Source Code Pro", monospace;
  font-size: 25px;
  text-decoration: none;
  // margin-top 20px;
  font-size: 1em;
`;

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
export default Link;
