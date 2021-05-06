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
`
const ProfileCardGridItem = styled(ProfileCard)`
    grid-column-start: 1;
    grid-column-end: 2;

`
const ProfileCardContainer = styled.div`




`
const ChatContainer = styled.div`
    background-color:${props => props.theme.chatBackgroundColor};
    width:100%;
    height:500px;
    display: grid;

    grid-template-columns: 20% 65% 15%;
    grid-template-rows: 90% 10%;
    border-top: 2px solid white;
`
const MessageListContainer = styled.div`
    background-color:${props => props.theme.chatForegroundColor};
    width:80%;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1; 
    grid-row-end: 2;
    padding-left: 10%;
    padding-right: 10%;
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
            <CardSlot>
                <ProfileCardGridItem></ProfileCardGridItem>
            </CardSlot>
            <MessageListContainer>
                <Messages>
                    <Message data="hi"></Message>
                    <Message isBot={true} data="hi how are you, I'm Lucasbot"></Message>
                    <Message data="What's your purpose?"></Message>
                    <Message isBot={true} data="My purpose is to educate whoever finds me on my creator. Although I server many purposes, that is my main purpose. What's your purpose?"></Message>
                    <Message data="hi"></Message>
                    <Message isBot={true} data="This message should be a different color and a bot"></Message>
                    <Message isBot={true} data="This message should be a different color and a bot"></Message>
                </Messages>
            </MessageListContainer>
            <ChatInput/>
        </ChatContainer>
    )
}