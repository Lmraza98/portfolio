import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import PageLink from '../PageLink'
const MenuContainer= styled.div`
    // left: ${props => props.left};
    // position: fixed;
    // top: 70px;
    // display: flex;
    // flex-direction: row;
    // justify-content: center;
    // align-items: center;
    // padding-left: 10px;
    // padding-top: 10px;
    transition: ease 1s;
`
const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const MenuButtonContainer = styled.div`
    display: inline: 
    align-content: center;
    // height: 100%;
    margin-left: 3px;
    border-left: 1px solid ${props => props.theme.textColor};
`

const PageLinkContainer = styled.div`
    padding: 5px;

`

const Icon = styled.i`
    font-size: 50px;
`
const SideMenu = () => {
    
    
    return (
                <MenuContainer left="-100px">
                    <IconContainer>
                        <Icon className="fab fa-youtube-square"></Icon>
                        <Icon className="fab fa-linkedin"></Icon>
                        <Icon className="fab fa-github"></Icon>
                    </IconContainer>
                    <PageLinkContainer>
                        <PageLink href="blog">BLOG</PageLink>
                    </PageLinkContainer>
                    
                </MenuContainer> 
    )
}

export default SideMenu
