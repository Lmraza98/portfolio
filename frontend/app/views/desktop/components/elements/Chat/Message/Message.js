import styled from 'styled-components'
import { useState } from 'react'

const MessageContainer = styled.div`
    
    color: white;
    width: fit-content;
    min-width: 15%;
    max-width: 75%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    

    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-self: ${props => props.isBot ? "flex-end" : "flex-start"};
`
const StyledMessage = styled.div`
    // border-radius: ${props => props.startSequence ? grey : blue};
    border-radius: 10px;
    text-align: center;
    background-color: ${props => props.isBot ? props.theme.botMessageColor : props.theme.userMessageColor};
`
const HoverMesssageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
`
const Info = styled.div`

    font-size: 10px;



`
export const Message = ({ data, isBot, startSequence, endSequence, timeStamp }) => {
    const [showInfo, setShowInfo] = useState(false)
    return (
        showInfo ? 
        <HoverMesssageContainer >
            <MessageContainer isBot={isBot}>
                <StyledMessage onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>{data}</StyledMessage>
                <Info>something</Info>
            </MessageContainer>
            
        </HoverMesssageContainer>  :
        <MessageContainer onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)} isBot={isBot}>
            <StyledMessage>{data}</StyledMessage>
        </MessageContainer>
    )
}
