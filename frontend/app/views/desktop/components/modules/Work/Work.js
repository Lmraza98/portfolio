import React from 'react'
import styled from 'styled-components'
import { ScrollElement } from '../../elements/ScrollElement'

const WorkGridContainer = styled.div`
    display: grid;
    height: 500px;
    align-items: center;
    border-top: 1px solid black;
`
const WorkGridItem = styled.div`
    justify-self: center;
`

export const Work = ({children, name}) => {
    return (
        <ScrollElement name="work">
            <WorkGridContainer>
                <WorkGridItem>
                    Work
                </WorkGridItem>
            </WorkGridContainer>
        </ScrollElement>
    )
}
