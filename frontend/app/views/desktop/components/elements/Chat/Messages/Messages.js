import styled from 'styled-components'

const MessagesContainer = styled.div`
    justify-content: left;
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    width: 100%;

`

export const Messages = ({children}) => {
    return (
        <MessagesContainer>{
            children
        }</MessagesContainer>
    )
}
