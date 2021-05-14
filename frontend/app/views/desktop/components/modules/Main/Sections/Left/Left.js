import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ProfileCard, MenuButton, ContactForm, Chat } from '../../../../elements'

import { GlobalContext, Store } from '../../../../../../../contexts/GlobalContext'
const LeftContainer = styled.div`
    height: 100%;
    background-color: rgba(255, 255, 255, .15);  
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    flex-direction: column;
    z-index: -1;
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
const ContactGridItem = styled.div`
    justify-content: start;
    grid-row-start: 3; 
    grid-row-end: 4;
`
const SendMessageContainer = styled.div`
    border-right: 20px solid #e08e22;
    background-color: #e08e22;
    width: 100%;
    // height: 100%;
    font-size:30px;
    text-align: center;
    font-family: ${props => props.theme.navFont};
    color: ${props => props.theme.textColor};
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
            <ContactGridItem>
                <SendMessageContainer>
                    Reach Out
                </SendMessageContainer>
                <ContactForm/>
            </ContactGridItem>
            
        </LeftContainer>
        
    )
}

export default Left
