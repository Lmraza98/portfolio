import React, { useState } from 'react'
import styled from 'styled-components'
import { Chat } from '../../elements'
const InfoCardContainer = styled.div`
    // background-color: #e08e22;
    // width: 80%;
    // height: 90%;
    padding: 5%;
    // padding-left: 5%;
    // background-color: #e08e22;
    // margin: 10%;
    color: ${props => props.theme.textColor};
    font-family: ${props => props.theme.textColor};
    // font-size: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const ChatDescriptionContainer = styled.div`


`
const ChatDescription = styled.body`


`
const ChatInputGridItem = styled.div`
    grid-row-start-2;
    grid-row-end-3
`

const InfoCard = () => {
    
    return (
        <InfoCardContainer>
            <ChatDescriptionContainer>
                Nice to meet you, 
            </ChatDescriptionContainer>
        </InfoCardContainer>
    )
}

export default InfoCard
