import React from 'react'
import styled from 'styled-components'
import { ScrollElement } from '../../elements/ScrollElement'

const ExperienceGridContainer = styled.div`
    display: grid;
    height: 500px;
    align-items: center;
    border-top: 1px solid black;
`
const ExperienceGridItem = styled.div`
    justify-self: center;
`

export const Experience = ({children, name}) => {
    return (
        <ScrollElement name="experience">
            <ExperienceGridContainer>
                <ExperienceGridItem>
                    Experience
                </ExperienceGridItem>
            </ExperienceGridContainer>
        </ScrollElement>
    )
}
