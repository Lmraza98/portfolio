import React from 'react'
import styled from 'styled-components'
import { ProfileCard, Chat,  GreetingsLine, ScrollElement } from '../../elements'

const GreetingsGridContainer = styled.div`
    display: grid;
    height: 70vh;
    align-items: center;
    grid-template-columns: 15% 10% 75%;
`
const GreetingsLineGridItem = styled.div`
    justify-self: center;
    grid-column-start: 2;
    grid-column-end: 3;
`
const ChatGridItem = styled.div`
    // justify-self: center;
    grid-column-start: 3;
    grid-column-end: 4;
    width: 100%;
    height: 100%;
`


export const Greetings = ({children, name}) => {
    return (
        <ScrollElement name="greetings">
            <GreetingsGridContainer>
            
                <GreetingsLineGridItem><GreetingsLine/></GreetingsLineGridItem>
                
                <ChatGridItem><Chat/></ChatGridItem>
            </GreetingsGridContainer>
        </ScrollElement>
    )
}
