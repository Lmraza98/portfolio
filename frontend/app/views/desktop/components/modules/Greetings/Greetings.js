import React from 'react'
import styled from 'styled-components'
import { ProfileCard, Chat,  ScrollLine, ScrollElement } from '../../elements'

const GreetingsGridContainer = styled.div`
    display: grid;
    height: 100vh;
    align-items: center;
    grid-template-columns: 15% 10% 25% 50%;
`
const ScrollLineGridItem = styled(ScrollLine)`
    justify-self: center;
    grid-column-start: 2;
    grid-column-end: 3;
    border: 1px solid black;
`
const ProfileCardGridItem = styled(ProfileCard)`
    justify-self: center;
    grid-column-start: 3;
    grid-column-end: 4;
    border: 1px solid black;
`
const ChatGridItem = styled(ProfileCard)`
    justify-self: center;
    grid-column-start: 4;
    grid-column-end: 5;
    border: 1px solid black;
`

export const Greetings = ({children, name}) => {
    return (
        <ScrollElement name="greetings">
            <GreetingsGridContainer>
                <ScrollLineGridItem/>
                <ProfileCardGridItem/>
                <ChatGridItem/>
            </GreetingsGridContainer>
        </ScrollElement>
    )
}
