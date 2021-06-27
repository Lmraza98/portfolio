import React from 'react'
import styled from 'styled-components'
import { HorizontalScroll } from '../../../../elements'
import { About, Contact, Experience, Greetings, Work } from '../../../../modules'

const Module = ({children}) => {
    return (
        <Module>{children}</Module>
    )
}
const Center = () => {
    return (
        <HorizontalScroll>
            <Greetings/> 
            <About/>
            <Work/>
            <Contact/>
        </HorizontalScroll>
    )
}

export default Center
