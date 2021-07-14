import React from 'react'
import styled from 'styled-components'

import { useState } from 'react'

const MenuComponentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    widht: 100%;

    justify-content: center;
    align-items: center;

`
const Title = styled.div`
    // font-size: 30px;
    color: white;
    font-family: "${ props => props.theme.navFont}";
  font-size: 50px;
  z-index: 20;
`
const MenuComponent = ({title, children}) => {

    const [ hover, setHover ] = useState(false)


    const onMouseEnter = () => {
        setHover(true)
    }
    const onMouseLeave = () => {
        setHover(false)
    }

    return (
        <MenuComponentContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {
                hover ? children : <Title>{title}</Title>
            }
        </MenuComponentContainer>
    )
}

export default MenuComponent
