import React from 'react'
import styled from 'styled-components'

const About_container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    // border: 1px solid black;
    border-radius: 20px;
    // padding: 10px;
    // width: 50%;
    // margin-left: 5%;
    // margin-right: 0%;
    padding:20px;
    height: 50%;
    background-color: #0AD1A1;
    margin: 10px;
`
const Info = styled.div`

`

const About = (props) => {
    return (
        <About_container>
            <Info>
                Software Engineer
                Boston, MA
                Wentworth Institute of Technology
                Current Senior
            </Info>
        </About_container>
    )
}
export default About