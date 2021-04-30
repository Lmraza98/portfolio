import React from 'react'
import styled from 'styled-components'
import { ScrollElement } from '../../elements/ScrollElement'

const GreetingsGridContainer = styled.div`
    display: grid;
    height: 500px;
    align-items: center;
    border-top: 1px solid black;
`
const GreetingsGridItem = styled.div`
    justify-self: center;
`

export const Greetings = ({children, name}) => {
    return (
        <ScrollElement name="greetings">
            <GreetingsGridContainer>
                <GreetingsGridItem>
                    Greetings
                </GreetingsGridItem>
            </GreetingsGridContainer>
        </ScrollElement>
    )
}
