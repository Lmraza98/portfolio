import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // text-align: center;
    justify-content: start;
    align-items: center;
    font-family: ${props => props.theme.navFont};
    color: ${props => props.theme.textColor};
    size: ${props => props.theme.h1TextSize};
    // justify-self: start;
`
const Label = styled.label`
    

`
const Input = styled.input`

`
const Message = styled.textarea`

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
    }
    .message {
        outline: none;
        width: 80%;
        // height: 50%;
        resize: vertical; 
        min-height: 30%;
        height: 30%;
        max-height: 50%;  
    }
    .name {
        outline: none;
        width: 80%;
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
        width: 80%;
        
    }
`;

export default StyledContactForm
