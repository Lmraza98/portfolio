import React, { Component } from 'react'
import styled from 'styled-components'
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>
const StyledLogo = styled.div`
font-size: 2em;
// flex-grow:.25;
color: #0AD1A1;
// align-self: center;
@font-face {
    font-family: 'Yesteryear';
    font-style: normal;
    font-weight: 400;
    src: local('../../'),
         url('../../fonts/yesteryear-v9-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('../../fonts/yesteryear-v9-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`
const Logo = () => {
    return (
        <StyledLogo>
            Lucas Raza
        </StyledLogo>
    )
}
export default Logo
