import React, { Component } from 'react'
import styled from 'styled-components'
const Main_container = styled.div`
display: flex;
flex-direction: column;
`

const SplitDiv_container = styled.div`
background-color: #c5eff7;
border: 2px solid black;
z-index: 100;
position: relative;
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
`
const LeftContent_container = styled.div`
display: flex;
flex-direction: column;
width:100%;
border: 2px solid white;
border-radius: 10px;
background-color: #2B7A78

`
const RightContent_container= styled.div`
display:flex;
flex-direction: column;
width:100%;
height: 100%;
`
const LeftContent = styled.div`
padding: 20px;
margin: 20px;
`
const RightContent = styled.div`
`

export default class MainContent extends Component {
    render() {
        return (
            <Main_container>
            <SplitDiv_container>
    
               <LeftContent_container>
                   <LeftContent>
                    <h1>Hello ... </h1>
                    <h2> </h2>
                   </LeftContent>
                
               </LeftContent_container>
               <RightContent_container>
                    <RightContent>Teest</RightContent>
               </RightContent_container>
            </SplitDiv_container>
            </Main_container>
        )
    }
}
