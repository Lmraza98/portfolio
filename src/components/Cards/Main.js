import React from 'react'
import styled from 'styled-components'

const Main_container = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    width: 40%;
    // margin-left: 10%;
    // margin-right: 5%;
    margin: 10px;

`

const Main = (props) => {
    return (
        <Main_container>
            Hello
        </Main_container>
    )
}

export default Main