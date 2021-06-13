import React from 'react'
import styled from 'styled-components'
import { ContactForm, Status } from '../../../../elements'
const ChatUserMenuContainer = styled.div`
    display: grid;
    grid-template-rows: 10% 15% 35% 5% 35%;
    height: 100%;
    transition: color ease 2s;
`
const StatusGridItem = styled.div`
    grid-row-start: 2;
    grid-row-end: 3;
    justify-content: start;
    height: 100%;
`
const StatusHeader = styled.div`
    border-left:  solid ${props => props.theme.sideColorSecondary};
    margin-left:-15px;
    // margin-right:20px;
    background-color: ${props => props.theme.sideColorSecondary};
    // left: -20px;
    width: 100%;
    // height: 100%;
    font-size:30px;
    text-align: left;
    font-family: ${props => props.theme.navFont};
    color: white;
    transition: color ease 2s;
    padding-left: 5%;
`
// const Offline = styled.div`
//     padding 10%;
//     grid-row-start: 4;
//     grid-row-end: 5;
// `
const ContactGridItem = styled.div`
    justify-content: start;
    grid-row-start: 3; 
    grid-row-end: 6;
`

const SendMessageHeader = styled.div`
    border-left:  solid ${props => props.theme.sideColorSecondary};
    margin-left:-15px;
    // margin-right:20px;
    background-color: ${props => props.theme.sideColorSecondary};
    // left: -20px;
    width: 100%;
    // height: 100%;
    font-size:30px;
    text-align: left;
    font-family: ${props => props.theme.navFont};
    color: white;
    transition: color ease 2s;
    padding-left: 5%;
`

const Right = () => {
    return (
        <ChatUserMenuContainer>
            <StatusGridItem>
                <StatusHeader>
                    Status
                </StatusHeader>
                <Status/>
            </StatusGridItem>
            <ContactGridItem>
                <SendMessageHeader>
                    Reach Out
                </SendMessageHeader>
                <ContactForm/>
            </ContactGridItem>
            
        </ChatUserMenuContainer>
    )
}

export default Right
