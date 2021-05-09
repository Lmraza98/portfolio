import Messages from './Messages'
import Message from './Message'
import styled from 'styled-components'
import ProfileCard from '../ProfileCard'
const CardSlot = styled.div`
    // position: absolute;
    position: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2%;
    height: 100% - 2%;
    width: 100% - 2%;
    background-color:${props => props.theme.chatBackgroundColor};
    padding: 10%;
`
const ProfileCardGridItem = styled(ProfileCard)`
    grid-column-start: 1;
    grid-column-end: 2;
    
`
const ProfileCardContainer = styled.div`
`
const ChatContainer = styled.div`
    
    width:100%;
    height:500px;
    display: grid;

    grid-template-columns: 20% 65% 15%;
    grid-template-rows: 90% 10%;
`
const MessageListGridItem = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1; 
    grid-row-end: 2;



`
const MessageListContainer = styled.div`
    // background-color:${props => props.theme.chatForegroundColor};
    background-color: transparent;
    width:80%;
    
    padding-left: 10%;
    padding-right: 10%;
    border-bottom: 3px solid ${props => props.theme.textColor};
    border-left: 3px solid ${props => props.theme.textColor};
    bottom: 0;
`
const ChatInputGridItem = styled.div`
    padding: .25em;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2; 
    grid-row-end: 3;
`
const ChatInputContainer = styled.div`
    display: grid;
    grid-template-columns: 90% 10%;
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
const ChatSubmitButton = styled.input`
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
export function Chat(){
    return (
        <ChatContainer>
            <CardSlotGridItem>
                <CardSlot>
                    <ProfileCardGridItem></ProfileCardGridItem>
                </CardSlot>
            </CardSlotGridItem>
            <MessageListGridItem>
                <MessageListContainer>
                    <Messages>
                        <Message data="hi"></Message>
                    </Messages>
                </MessageListContainer>
            </MessageListGridItem>
            <ChatInputGridItem>
                <ChatInputContainer>
                    <ChatInput type="text"/>
                    <ChatSubmitButton value="send" type="submit"></ChatSubmitButton>
                </ChatInputContainer>
            </ChatInputGridItem>
        </ChatContainer>
    )
}