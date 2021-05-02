import React from 'react'
import styled from 'styled-components'
import { ProfileCard, Chat,  ScrollLine, ScrollElement } from '../../elements'

const GreetingsGridContainer = styled.div`
    display: grid;
    height: 500px;
    align-items: center;
`
const ScrollLineGridItem = styled(ScrollLine)`
    justify-self: center;
    grid-column-start: 2;
    grid-column-end: 3;
`
const ProfileGridItem = styled(Profile)`
    justify-self: center;
    grid-column-start: 3;
    grid-column-end: 4;

`

export const Greetings = ({children, name}) => {
    return (
        <ScrollElement name="greetings">
            <GreetingsGridContainer>
                <ScrollLineGridItem/>
                <ProfileGridItem/>
            </GreetingsGridContainer>
        </ScrollElement>
    )
}
