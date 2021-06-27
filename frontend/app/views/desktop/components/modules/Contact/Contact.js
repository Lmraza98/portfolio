import React from 'react'
import styled from 'styled-components'
import { ScrollElement } from '../../elements/ScrollElement'

const ContactGridContainer = styled.div`
    display: grid;
    height: 100%;
    align-items: center;
    border-top: 1px solid black;
`
const ContactGridItem = styled.div`
    justify-self: center;
`

export const Contact = ({children, name}) => {
    return (
        // <ScrollElement name="contact">
            <ContactGridContainer>
                <ContactGridItem>
                    Contact
                </ContactGridItem>
            </ContactGridContainer>
        // {/* </ScrollElement> */}
    )
}
