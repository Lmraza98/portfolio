import nextLink from 'next/link'
import styled from 'styled-components'
import React, {useState} from 'react'
import { usePageState, usePageDispatch } from '../../page-context.js'


const  StyledLink = styled.a`
    // color: white;
    color: ${(props)=> props.active ? "#0AD1A1":"#CACACA"};
    font-family: 'Source Code Pro', monospace;
    font-size: 25px;
    text-decoration: none;
    // margin-top 20px;
    font-size: 1em;
`;
const NextLink = styled(nextLink)`
    display: flex; 
    flex-direction: column
    justify-content: center;`

const Link = (props) => {
    const [active, setActive] = useState(props.active)
    // console.log(props.active)
    const handleClick = (e) => {
        // console.log("clicked " + props.linkName)
        const pageName = props.linkName.toLowerCase()
        dispatch({type: pageName})
        setActive({active: true})
    }
    
    console.log("home is: " + active)
    
    return (
        <NextLink active={active}onClick={() => handleClick()} href={props.link} passHref>
            <StyledLink active={active}>
            {props.children}
        </StyledLink>
        </NextLink>
    )
       
        
}
export default Link