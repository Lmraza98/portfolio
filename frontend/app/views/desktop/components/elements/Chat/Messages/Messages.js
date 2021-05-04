import styled from 'styled-components'

const MessagesContainer = styled.div`
    justify-content: center;

`

export const Messages = ({message}) => {
    return (
        <MessagesContainer>{
            message
        }</MessagesContainer>
    )
}
