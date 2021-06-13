import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
    // width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: start;
    align-items: left;
    font-family: ${props => props.theme.navFont};
    color: ${props => props.theme.textColor};
    size: ${props => props.theme.h1TextSize};
    transition: color ease 2s;
    // justify-self: start;
    padding-left: 10px;
    padding-right: 10px;
    // padding-right: 10px;
`
const Label = styled.label`
    // padding-left: 10px;

`
const Input = styled.input`
    align-self: center;
    
`
const Message = styled.textarea`
    align-self: center;
`
const Button = styled.button`

`


function ContactForm({className}) {
    const [submit, setSubmit] = useState(false)
    const sendForm = async (event) => {
        event.preventDefault();
        const res = await fetch('/api/contact',{
            body: JSON.stringify({
                name: event.target.name.value,
                message: event.target.message.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
    
        const result = await res.json()
        setSubmit(true)
    }
    
    const form = submit ? 
    <div>Success</div> : 
    <Form className={className} onSubmit={sendForm}>
        <Label htmlFor="name">Name</Label>
        <Input className="name" id="name" name="name" type="text" autoComplete="name" required />
        <Label htmlFor="message">Message</Label>
        <Message className="message" id="message" name="message" type="text" autoComplete="message" required />
        <Button className="button" type="submit">Message Me!</Button>
    </Form>
    return (
        form
    )
}
const StyledContactForm = styled(ContactForm)`

    .label {
        outline: none;
        text-self: left;
        width: 100%;
        justify-content: left;
        left: 0;
        align-self: left;

    }
    .message {
        outline: none;
        width: 100%;
        // height: 50%;
        resize: vertical; 
        // height:  200px;
        height: 10%;
        min-height: 20px;
        
        max-height: 50%;  
    }
    .name {
        outline: none;
        width: 100%;
        text-self: left;
        
    }
    .button {
        outline: none;
        background: transparent;
        font-family: ${props => props.theme.navFont};
        color: ${props => props.theme.textColor};
        font-size: 30px;
        border-radius: 5px;
        border: 1px solid ${props => props.theme.textColor};
        margin-top: 5px;
        width: 100%;
        transition: color ease 2s;
        
    }
`;

export default StyledContactForm
