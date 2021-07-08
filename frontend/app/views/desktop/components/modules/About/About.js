import React from 'react'
import styled from 'styled-components'
import { AboutLine } from '../../elements'
import { ScrollElement } from '../../elements/ScrollElement'

const AboutGridContainer = styled.div`
    display: grid;
    height: 100%;
    align-items: center;
    width: 100%;
    grid-template-rows: 1fr 1fr 1fr;
    // border-top: 1px solid black;
    align-items: center;
    background-color: white;
    border-left: 7px solid black;
    border-right: 7px solid black;

`
const AboutGridItem = styled.div`
grid-row-start: 1;
grid-row-end: 2;
align-items: center;
justify-content: center;
align-text: center;
text-align: center;
`
const AboutLineGridItem = styled.div`
grid-row-start: 0;
grid-row-end: 1;


`
const AboutLineContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    top: 0;
    height: 20px;
`
const Section = styled.div`
    grid-row-start: ${props => props.rowStart};
    grid-row-end: ${props => props.rowEnd};
    height: 100%;
    background-color: ${props => props.backgroundColor}

`




export const About = ({children, name}) => {
    return (
            <AboutGridContainer>
                <Section rowStart={1} rowEnd={2} backgroundColor="">
                    Skills
                </Section>
                <Section rowStart={2} rowEnd={3} backgroundColor="">
                    FrontEnd
                </Section>
                <Section rowStart={3} rowEnd={4} backgroundColor="">
                    Backend
                </Section>
            </AboutGridContainer>
    )
}
