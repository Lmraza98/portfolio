import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const GreetingsContainer = styled.div`
    display: ${props => props.scrolled ? 'flex' : "none"};
`
const onScroll = () => {

} 

const index = () => {
    const [ scrolled, setScrolled ] = useState(false)

    useEffect(() => {
        window.onscroll = () => {
            setScrolled(true)
            console.log('scrolled')
        }
    }, [scrolled])
 
    return (
        <GreetingsContainer scrolled={scrolled}>
            Hello
        </GreetingsContainer>
    )
}

export default index
