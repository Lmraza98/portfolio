import React, { useState } from 'react'
import styled from 'styled-components'
import Messages from '../../elements/Chat/Messages'
import Message from '../../elements/Chat/Message'
const ChatGridContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 90% 10%;
`
const MessageListGridItem = styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
`
const ChatInputGridItem = styled.div`
    grid-row-start: 2;
    grid-row-end: 3;
`
const ChatInputContainer = styled.form`
    display: grid;
    grid-template-columns: 80% 20%;
`
const ChatInput = styled.input`
    grid-column-start: 1;
    grid-column-end: 2;
    height: 20px;
    background-color:transparent;
    // decorations: none;
    outline: none;
    border-top: hidden;
    border-right: hidden;
    border-left: hidden;
    border-bottom: hidden;
    // padding-left: 10%;
    color: ${props => props.theme.textColor};
    font-size: 1rem;
    // padding: .25em;
    padding-left: 10%;
    // padding: .25em;
    // padding-left: 10%;
`
const ChatSubmitButton = styled.button`
    grid-column-start: 2;
    grid-column-end: 3; 
    background-color: transparent;
    font-family: ${props => props.theme.navFont};
    text-decoration: none;
    outline: none;
    color: ${props => props.theme.textColor};
    border: none;
    border-left: 2px solid ${props => props.theme.textColor};
    font-size: 10;
    
    :hover {
        font-size: 18px;
        border-left: 3px solid ${props => props.theme.textColor};
    }
`
const MessageListContainer = styled.div`
    // background-color:${props => props.theme.chatForegroundColor};
    display: flex; 
    flex-direction: column-reverse;
    width:80%;
    height: 100%;
    padding-left: 10%;
    padding-right: 10%;
    border-radius: 25px;
`

const Chat = () => {
    const [ messages, setMessages ] = useState([])
    const [inputValue, setInputValue] = useState("")
    const onSend = (event) => {
        event.preventDefault();
        setMessages([inputValue, ...messages])
        setInputValue(""); 
    }
    return (
        <ChatGridContainer>
            <MessageListGridItem>
                <MessageListContainer>
                    <Messages>
                        {
                            messages.map((message)=> {
                                    return <Message timeStamp="2:05 PM" data={message}></Message>
                            })
                        }
                    </Messages>
                </MessageListContainer>
            </MessageListGridItem>
            <ChatInputGridItem>
                <ChatInputContainer onSubmit={onSend}>
                    <ChatInput value={inputValue} onChange={(event) => {setInputValue(event.target.value)}} placeholder="Say Hi!" type="text"/>
                    <ChatSubmitButton value="submit">Send</ChatSubmitButton>
                </ChatInputContainer>
            </ChatInputGridItem>
        </ChatGridContainer>
    )
}

export default Chat
