import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { PageLink, Chat } from '../../elements'
const SideMenuGridItem = styled.div`
    grid-row-start: ${props => props.start};
    grid-row-end: ${props => props.start};
    background-color: ${props => props.theme.mode === 'light' ?  (props.item === 'blog' ? '#000000' : 'transparent') : (props.item === 'blog' ? '#bababa' : 'transparent')};
    transition: color ease 2s;
    transition: background-color ease 2s;
    
`
const ItemGrid = styled.div`
    display: grid; 
    grid-template-rows: 50px 1fr;
    height: 100%;
    
`
const ItemGridItem = styled.div`
    grid-row-start: ${props => props.start};
    grid-row-end: ${props => props.end};
    // align-items: center;
`
const MenuGridContainer= styled.div`
    display: grid; 
    grid-template-rows: 1fr 1fr 1fr;
    // visibility: ${props => props.show ? "hidden" : "none"};
    width: ${props => props.show ? "20%" : "0px"};
    transition:  width .7s;
    // transition: color ease 2s;
    
`
const IconContainer = styled.div`
    width: 80%;
    // height: 100%;
    // padding: 10%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition:  font-size .25s;
`
const PageLinkContainer = styled.div`
    // padding: 5px;
    // align-self: start;
    justify-self: start;
    // top: 0;
`
const Icon = styled.i`
    font-size: ${props => props.show ? "25px" : "0px"};
    color: ${props => props.theme.textColor === "#ffffff" ? "#000000" : " #ffffff"};
    transition:  font-size .25s;
    transition: color ease 2s;
`
const Header = styled.div`
    color: ${props => props.theme.mode === 'light' ?  (props.item === 'blog' ? 'white' : 'black') : (props.item === 'blog' ? 'black' : 'white')};
    font-size: ${props => props.show ? "40px" : "0px"};
    font-family: ${props => props.theme.navFont};
    // height: 90%;
    // padding-top: 10%;
    transition: color ease 2s;
    
`
const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`
const ArticlesListContainer = styled.div`



`
const BlogCardGridItem = styled.div`
    grid-row-start: 3;
    grid-row-end: 4;
    height: 100%;


`
const BlogCardContainer = styled.div`
    display: flex; 
    flex-direction: column;
    // padding-top: 10%;
    height: 90%;
    background-color: grey;

`
const BlogExplanation = styled.div`
    color: ${ props => props.theme.navLinkColor };
    font-family: "${ props => props.theme.navFont}";
    font-size: ${props => props.show ? "18px" : "0px"};
    transition:  font-size .25s;

`

const SideMenu = ({show}) => {
    return (
                <MenuGridContainer show={show} left="-100px">
                    <SideMenuGridItem start="1" end="2">
                        <Chat/>
                    </SideMenuGridItem>
                    <SideMenuGridItem item="blog" start="2" end="3">
                        <Header item="blog" show={show}>Blog</Header>
                        <PageLink href="https://www.youtube.com"><Icon show={show}  className="fab fa-youtube-square"></Icon></PageLink>
                        <PageLink href="https://www.linkedin.com"><Icon show={show} className="fab fa-linkedin"></Icon></PageLink>
                        <PageLink href="https://www.github.com"><Icon show={show} className="fab fa-github"></Icon></PageLink>
                    </SideMenuGridItem>
                    <SideMenuGridItem start="3" end="4"> 
                    <ItemGrid >
                        <ItemGridItem start="1" end="2">
                            <Header show={show}>Contact</Header>
                        </ItemGridItem>
                        <ItemGridItem start="2" end="3">
                            <ArticlesListContainer>
                            </ArticlesListContainer>
                        </ItemGridItem>
                    </ItemGrid>
                    
                    </SideMenuGridItem>
                </MenuGridContainer> 
    )
}

export default SideMenu
