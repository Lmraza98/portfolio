import React from 'react'
import styled from 'styled-components'

const Contact_container = styled.div`
    // border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    // height: inherit;
    
    margin: 10px;
    background-color: #7C8482;
    z-index: 20;
    color: white;
    display: flex;
    flex-direction: column;
    // flex-wrap: wrap; 
    align-items: center;
    align-content: center;
    flex-grow: 1;
  
`
const Contact_button = styled.button`
&:focus {
    display: none;
}
    background-color: #0AD1A1;
    border-radius: 50px;
    color: white;
    width: 300px;
    // height: 30px;
    bottom: 0;
    // focus: none;
    font-size: 20px;
    // flex-grow: 1;
`
const Statement = styled.div`
    color: white;
    // size: 20px;
    flex-grow: 1;
`

const Contact = (props) => {
    return (
        <Contact_container>
            <Statement>Book more clients for your business!</Statement>
            <Statement>I create aesthetic, responsive websites that guide users focus</Statement>
            <Contact_button>Contact</Contact_button>
        </Contact_container>
    )
}
export default Contact
