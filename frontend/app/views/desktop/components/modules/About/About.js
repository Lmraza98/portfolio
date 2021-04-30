import React from 'react'
import styled from 'styled-components'
import { ScrollElement } from '../../elements/ScrollElement'

const AboutGridContainer = styled.div`
    display: grid;
    height: 500px;
    align-items: center;
    border-top: 1px solid black;
`
const AboutGridItem = styled.div`
    justify-self: center;
`

export const About = ({children, name}) => {
    return (
        <ScrollElement name="about">
            <AboutGridContainer>
                <AboutGridItem>
                    About
                </AboutGridItem>
            </AboutGridContainer>
        </ScrollElement>
    )
}
