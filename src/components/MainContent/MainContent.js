import React, { Component } from 'react'
import styled from 'styled-components'
const Main_container = styled.div`
display: flex;
flex-direction: column;
margin-left: 5%;
margin-right: 5%;
// height: 92.5%;
background-color: #c5eff7;
height: 100vh
`

const SplitDiv_container = styled.div`
// 
// border: 2px solid black;
z-index: 100;
position: relative;
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
// height: 100%;

`
const LeftContent_container = styled.div`
display: flex;
flex-direction: column;
width:100%;
// border: 2px solid white;
// border-radius: 10px;
// background-color: #2B7A78

`
const RightContent_container= styled.div`
display:flex;
flex-direction: column;
width:100%;
// height: 100%;
`
const LeftContent = styled.div`
padding: 20px;
margin: 20px;
`
const RightContent = styled.div`
`
const MainContent = () => {
    return (
        <Main_container>
        <SplitDiv_container>

           <LeftContent_container>
               <LeftContent>
               </LeftContent>
            
           </LeftContent_container>
           <RightContent_container>
                <RightContent></RightContent>
           </RightContent_container>
        </SplitDiv_container>
        </Main_container>
    )
}
export default MainContent
