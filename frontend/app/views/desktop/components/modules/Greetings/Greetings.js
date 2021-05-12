import React from 'react'
import styled from 'styled-components'
import { Chat,  GreetingsLine, ScrollElement } from '../../elements'

const GreetingsGridContainer = styled.div`
    display: grid;
    height: 80vh;
    align-items: center;
    grid-template-columns: 15% 10% 75%;
    grid-template-rows: 20% 80%;
`
const GreetingsLineGridItem = styled.div`
    justify-self: center;
    
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-start: 2;
`
const ChatGridItem = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-start: 2;
    width: 100%;
    height: 100%;
`


export const Greetings = ({children, name}) => {
    return (
        <ScrollElement name="greetings">
            <GreetingsLineGridItem><GreetingsLine/></GreetingsLineGridItem>
            <GreetingsGridContainer>
                <ChatGridItem><Chat/></ChatGridItem>
            </GreetingsGridContainer>
        </ScrollElement>
    )
}
