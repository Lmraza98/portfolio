import React, { useState } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from "styled-components";

const StyledLink = styled.a
`
  text-decoration: none;

  color: ${ props => props.theme.pageLinkColor };
  font-family: ${ props => props.theme.font };
  font-size: ${ props => props.theme.font };

`
const PageLink = ({ children, href }) => {
  return (
      <Link href={href} passHref>
        <StyledLink>
        {children}
        </StyledLink>
      </Link>
  );
};
export { PageLink };
