import styled from 'styled-components'
import React, { useState, useEffect } from 'react'

const MessagesContainer = styled.div`
    justify-content: left;
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    font-size: ${ props => props.theme.messageTextSize};
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
`

export const Messages = ({children, messageList}) => {

    const [ messages, setMessages ] = useState({messages: []})
    
    useEffect(() => {
        setMessages({messages})
    }, messages)

    return (
        <MessagesContainer>{
            React.Children.map(children, (child) => child)
        }</MessagesContainer>
    )
}
