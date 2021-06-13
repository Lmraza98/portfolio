import React, { useState } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from "styled-components";

const StyledLink = styled.a
`
  text-decoration: none;
  color: ${ props => props.theme.navLinkColor };
  font-family: "${ props => props.theme.navFont}";
  font-size: ${ props => props.theme.h1TextSize };
  align-self: center;
`
const PageLink = ({ children, href }) => {
  return (
      <Link href={href} passHref>
        <StyledLink>
        {
          children
        }
        </StyledLink>
      </Link>
  );
};
export { PageLink };
