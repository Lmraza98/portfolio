import React, { Component } from 'react'
import styled from 'styled-components'
const StyledLogo = styled.div`
    font-size: 35px;
    
    color: #2b7a78;
    flex-grow:.25;
    align-self: center;
`
const Logo = () => {
    return (
        <StyledLogo>
            Lucas Raza
        </StyledLogo>
    )
}
export default Logo
