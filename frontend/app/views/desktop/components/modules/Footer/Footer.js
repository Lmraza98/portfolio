import React from 'react'
import styled from 'styled-components'
import { ScrollElement } from '../../elements/ScrollElement'

const FooterGridContainer = styled.div`
    display: grid;
    height: 50px;
    align-items: center;
    border-top: 1px solid black;
`
const FooterGridItem = styled.div`
    justify-self: center;
`

export const Footer = ({children, name}) => {
    return (
        <ScrollElement name="footer">
            <FooterGridContainer>
                <FooterGridItem>
                    Footer
                </FooterGridItem>
            </FooterGridContainer>
        </ScrollElement>
    )
}
