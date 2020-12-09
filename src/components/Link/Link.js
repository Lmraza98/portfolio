import importLink from 'next/link'
import styled from 'styled-components'
import React from 'react'
import { usePageState, usePageDispatch } from '../../page-context.js'


const  StyledLink = styled(importLink)`
    color: #17252A;
    font-family: 'Source Code Pro', monospace;
    font-size: 25px;
    text-decoration: none;
    margin-top 20px;
`;

const Link = (props) => {
    const dispatch = usePageDispatch();
    function handleClick(e) {
        console.log("clicked " + props.linkName)
        const pageName = props.linkName.toLowerCase()
        dispatch({type: pageName})
    
    }
    
    return (
        <StyledLink  href={props.link}>
            <a onClick={() => handleClick()} className= "StyledLink">{props.children}</a>
        </StyledLink>
    )
}
export default Link