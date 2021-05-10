import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import PageLink from '../PageLink'

const ShowMenuContainer= styled.div`
    left: ${props => props.left};
    position: fixed;
    top: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
    transition: ease 1s;
`
const HideMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    left: 0;
    position: fixed;
    top: 70px;
`
const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const MenuButtonContainer = styled.div`
    display: inline: 
    align-content: center;
    height: 100%;
    margin-left: 3px;
    border-left: 1px solid ${props => props.theme.textColor};
`
const PlusButton = styled.div`
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background-color: ${props => props.theme.textColor};
    position: relative;
    margin-left: 3px;
    :after {
        content: " ";
        position: absolute;
        display: block;
        background-color: ${props => props.theme.oppositeText};
        height: 2px;
        margin-top: -2px;
        top: 50%;
        left: 5px;
        right: 5px;
        z-index: 9;
    }
    :before {
        content: " ";
        position: absolute;
        display: block;
        background-color: ${props => props.theme.oppositeText};
        width: 2px;
        margin-left: -1px;
        left: 50%;
        top: 5px;
        bottom: 5px;
        z-index: 9;
    }
`
const MinusButton = styled.div`
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background-color: ${props => props.theme.textColor};
    position: relative;
    margin-left: 3px;
    :after {
        content: " ";
        position: absolute;
        display: block;
        background-color: ${props => props.theme.oppositeText};
        height: 2px;
        margin-top: -1px;
        top: 50%;
        left: 5px;
        right: 5px;
        z-index: 9;
    }
    // :before {
    //     content: " ";
    //     position: absolute;
    //     display: block;
    //     background-color: #fff;
    //     width: 2px;
    //     margin-left: -1px;
    //     left: 50%;
    //     top: 5px;
    //     bottom: 5px;
    //     z-index: 9;
    // }
`
const PageLinkContainer = styled.div`
    padding: 5px;

`
const MenuButton = ({show}) => {
    console.log("show: " + show)
    return (
        show ? <PlusButton/> : <MinusButton/>
    )
}

const SideMenu = () => {
    
    const [ show, setShow ] = useState(true)

    const handleClick = (event) => {
        setShow(!show)
    }
    return (
        show ?  <ShowMenuContainer left="0px">
                    <IconContainer>
                        <Image width="50px" height="50px" src="/icons/github.png"/>
                        <Image width="50px" height="50px" src="/icons/linkedin.png"/>
                        <Image width="50px" height="50px" src="/icons/youtube.png"/>
                    </IconContainer>
                    <PageLinkContainer>
                        <PageLink href="blog">BLOG</PageLink>
                    </PageLinkContainer>
                    <MenuButtonContainer onClick={handleClick}>
                        <MenuButton show={show}/>
                    </MenuButtonContainer>
                </ShowMenuContainer> 
                : 
                <ShowMenuContainer left="-100px">
                    <IconContainer>
                        <Image width="50px" height="50px" src="/icons/github.png"/>
                        <Image width="50px" height="50px" src="/icons/linkedin.png"/>
                        <Image width="50px" height="50px" src="/icons/youtube.png"/>
                    </IconContainer>
                    <PageLinkContainer>
                        <PageLink href="blog">BLOG</PageLink>
                    </PageLinkContainer>
                    <MenuButtonContainer onClick={handleClick}>
                        <MenuButton show={show}/>
                    </MenuButtonContainer>
                </ShowMenuContainer> 
    )
}

export default SideMenu
