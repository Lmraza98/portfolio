import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import PageLink from '../../elements/PageLink'
const SideMenuGridItem = styled.div`
    grid-row-start: ${props => props.start};
    grid-row-end: ${props => props.start};
    background-color: ${props => props.item === 'blog' ? 'grey' : 'transparent'};
`
const ItemGrid = styled.div`
    display: grid; 
    grid-template-rows: 10% 90%;
`
const ItemGridItem = styled.div`
    grid-row-start: ${props => props.start};
    grid-row-start: ${props => props.end};
    
`
const MenuGridContainer= styled.div`
    display: grid; 
    grid-template-rows: 1fr 1fr 1fr;
    // visibility: ${props => props.show ? "hidden" : "none"};
    width: ${props => props.show ? "20%" : "0px"};
    transition:  width .7s;
    
`
const IconContainer = styled.div`
    width: 80%;
    // padding: 10%;
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
    font-size: ${props => props.show ? "50px" : "0px"};
    color: ${props => props.theme.textColor};
    transition:  font-size .25s;
`
const LinksGridItem = styled.div`
    grid-row-start: 2;
    grid-row-end: 3;
    height: 100%;
`
const LinksHeaderGridItem = styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
`
const Header = styled.div`
    color: ${props => props.theme.textColor};
    font-size: ${props => props.show ? "40px" : "0px"};
    font-family: ${props => props.theme.navFont};
    // height: 90%;
    // padding-top: 10%;
    
`
const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`
const ArticlesGridItem = styled.div`
    grid-row-start: 5;
    grid-row-end: 6;
    height: 100%;


`
const ArticlesHeaderGridItem = styled.div`
    grid-row-start: 4;
    grid-row-end: 5;
    
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
    padding-top: 10%;
    height: 90%;
    background-color: grey;

`
const BlogCard = styled.div`
    bacground-color: grey;
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
                        <ItemGrid>
                            <ItemGridItem start="1" end="2">
                                <Header show={show}>LINKS</Header>
                            </ItemGridItem>
                            <ItemGridItem start="2" end="3">
                                <LinksContainer>
                                    <IconContainer>
                                        <PageLink href="blog"><Icon show={show}  className="fab fa-youtube-square"></Icon></PageLink>
                                        <PageLink href="blog"><Icon show={show} className="fab fa-linkedin"></Icon></PageLink>
                                        <PageLink href="blog"><Icon show={show} className="fab fa-github"></Icon></PageLink>
                                    </IconContainer>
                                </LinksContainer>
                            </ItemGridItem>
                        </ItemGrid>
                        
                    </SideMenuGridItem>
                    <SideMenuGridItem item="blog" start="2" end="3">
                        <ItemGrid >
                            <ItemGridItem start="1" end="2">
                                <Header show={show}>Checkout My Blog!</Header>
                            </ItemGridItem>
                            <ItemGridItem start="2" end="3">
                                <BlogCardContainer>
                                    <BlogExplanation>
                                        Checkout my blog!
                                    </BlogExplanation>
                                    <PageLinkContainer>

                                    </PageLinkContainer>
                                </BlogCardContainer>
                            </ItemGridItem>
                        </ItemGrid>
                    </SideMenuGridItem>
                    <SideMenuGridItem start="3" end="4"> 
                    <ItemGridItem start="1" end="2">
                        <Header show={show}>Articles</Header>
                    </ItemGridItem>
                    <ItemGridItem start="2" end="3">
                        <ArticlesListContainer>
                        </ArticlesListContainer>
                    </ItemGridItem>
                    </SideMenuGridItem>
                </MenuGridContainer> 
    )
}

export default SideMenu
