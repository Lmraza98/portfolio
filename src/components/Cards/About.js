import React from 'react'
import styled from 'styled-components'
import IconWheel from '../IconWheel/IconWheel'

const About_container = styled.div`
    display: inherit;
    flex-direction: column;
    align-content: center;
    
    border-radius: 20px;
    background-color: #0AD1A1;

    padding-top: 1em;
    padding-bottom: 1em;
    // flex-grow: 1;

    // height: inherit;
    
    margin: 10px;
  
`
const Info = styled.div`
    display: flex;
    flex-direction column;
    align-items: center;
    color: white;
    // height: 100%;
`
const H1 = styled.div`
    font-size: 2em;
    // color: black;
    padding-bottom: 5px;
`
const H2 = styled.div`
    font-size: 1.5em;
    // color: black;
`
const H3 = styled.div`
    font-size: 1em;
    // color: black;
`
const H4 = styled.div`
    font-size: 1em;
    // color: black;
`

const About = (props) => {
    return (
        <About_container>
            <Info>
                <H1>Software Engineer</H1>
                <H2>Boston, MA</H2>
                <H3>Wentworth Institute of Technology</H3>
                <H3>Current Senior</H3>
                <IconWheel></IconWheel>
            </Info>
        </About_container>
    )
}
export default About