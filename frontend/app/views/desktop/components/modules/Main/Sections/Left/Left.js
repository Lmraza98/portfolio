import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ProfileCard, MenuButton, ContactForm, Chat } from '../../../../elements'

import { GlobalContext, Store } from '../../../../../../../contexts/GlobalContext'
const LeftContainer = styled.div`
    height: 100%;
    background-color: ${props => props.theme.sideColor};
    transition: background-color ease 2s;
    display: grid;
    grid-template-rows: 25% 1fr 25%;
    flex-direction: column;
    z-index: -1;
    transition: background-color ease 2s;
    
`
// const CardContainer = styled.div`
//     position: flex;
//     flex-direction: row;
//     justify-content: column;
//     justify-self: center;
//     height: 100%;
// `
const CardGridItem = styled.div`
    grid-row-start: 1; 
    grid-row-end: 2;
    justify-content: start;
    align-self: start;
    z-index: 1;
    
`
const ChatGridItem = styled.div`
    grid-row-start: 2; 
    grid-row-end: 3;
    justify-content: center;
    z-index: 1;
`
const InfoSquare = styled.div`
    grid-row-start: 2; 
    grid-row-end: 3;
    
    width: 100%;
    height: 100%;
    z-index: 0;
    position: relative;
`



const Left = () => {
    
    return (
        <LeftContainer>
            
            <CardGridItem>
                <MenuButton/>
                <ProfileCard/>
            </CardGridItem>
            <ChatGridItem>
                <Chat/>
            </ChatGridItem>
            
            
        </LeftContainer>
        
    )
}

export default Left
