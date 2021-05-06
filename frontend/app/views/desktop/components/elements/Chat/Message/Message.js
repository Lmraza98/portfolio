import styled from 'styled-components'

const MessageContainer = styled.div`
    background-color: ${props => props.isBot ? props.theme.botMessageColor : props.theme.userMessageColor};
    color: white;
    width: fit-content;
    min-width: 5%;
    max-width: 40%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-self: ${props => props.isBot ? "flex-end" : "flex-start"};
`
const StyledMessage = styled.div`
    // border-radius: ${props => props.startSequence ? grey : blue};
`
const onHover = ({event}) => {
    
}

import React from 'react'

export const Message = ({ data, isBot, startSequence, endSequence, timeStamp }) => {
    return (
        <MessageContainer isBot={isBot}>
            <StyledMessage>{data}</StyledMessage>
        </MessageContainer>
    )
}
