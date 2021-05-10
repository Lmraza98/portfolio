import { useState, useRef } from 'react'
import Messages from './Messages'
import Message from './Message'
import styled from 'styled-components'
import ProfileCard from '../ProfileCard'

const ProfileCardGridItem = styled(ProfileCard)`
`
const ProfileCardContainer = styled.div`
`
const ChatGridContainer = styled.div`
    width:100%;
    height:100%;
    display: grid;

    grid-template-columns: 20% 65% 15%;
    grid-template-rows: 5% 85% 10%;
    
`
const CardGridItem = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
`
const CardContainer = styled.div`
    position: flex;
    flex-direction: row;
    justify-content: column;
    align-items: center;
    height: 100%;
    background-color: rgba(255, 255, 255, .15);  
`
const MessageListGridItem = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2; 
    grid-row-end: 3;

    background-color: transparent;
    // border-bottom: 3px solid ${props => props.theme.textColor};
    // border-left: 3px solid ${props => props.theme.textColor};
    bottom: 0;
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
const ChatInputGridItem = styled.div`
    padding: .25em;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3; 
    grid-row-end: 4;
`
const ChatInputContainer = styled.form`
    display: grid;
    grid-template-columns: 80% 20%;
    
`
const ChatInput = styled.input`
    grid-column-start: 1;
    grid-column-end: 2;
    background-color:transparent;
    // decorations: none;
    outline: none;
    border-top: hidden;
    border-right: hidden;
    border-left: hidden;
    border-bottom: hidden;
    padding-left: 10%;
    color: ${props => props.theme.textColor};
    font-size: ${props => props.theme.messageInputTextSize};
    padding: .25em;
    padding-left: 10%;
    padding: .25em;
    padding-left: 10%;
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
    font-size: ${props => props.theme.h1TextSize};

    :hover {
        font-size: 24px;
        border-left: 3px solid ${props => props.theme.textColor};
    }
`
const ChatTopGridItem = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1; 
    grid-row-end: 2;
    background-color: transparent;
    // backdrop-filter: blur(5px);
    // border-left: 1px solid ${props => props.theme.textColor};
`
const ChatRightGridItem = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1; 
    grid-row-end: 4;
    background-color: rgba(255, 255, 255, .15);  
//   backdrop-filter: blur(5px);
    // border-top-left-radius: 30%;
    // border-bottom-left-radius: 30%;


`
function buildMessage(message) {

}
export function Chat(){
    const [ messages, setMessages ] = useState([])
    const [inputValue, setInputValue] = useState("")
    console.log(messages)
    const onSend = (event) => {
        event.preventDefault();
        setMessages([inputValue, ...messages])
        setInputValue(""); 
        
    }
    return (
        <ChatGridContainer>
            <ChatTopGridItem/>
            <ChatRightGridItem/>
            <CardGridItem>
                <CardContainer>
                    <ProfileCard></ProfileCard>
                </CardContainer>
            </CardGridItem>
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