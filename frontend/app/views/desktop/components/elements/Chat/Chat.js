import Messages from './Messages'
import styled from 'styled-components'

const ChatContainer = styled.div`
    
    background-color:${props => props.theme.chatBackgroundColor};
    width:100%;
    height:500px;
    display: grid;

    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 90% 10%;

`
const MessageListContainer = styled.div`
    background-color:${props => props.theme.chatForegroundColor};
    width:100%;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1; 
    grid-row-end: 2;
`

const ChatInput = styled.input`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2; 
    grid-row-end: 3;

`

export function Chat(){
    return (
        <ChatContainer>
            <MessageListContainer>
                <Messages/>
            </MessageListContainer>
            <ChatInput/>
        </ChatContainer>
    )
}