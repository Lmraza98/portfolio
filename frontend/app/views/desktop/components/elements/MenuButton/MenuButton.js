import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../../../../contexts/GlobalContext'
import styled from 'styled-components'
const MenuButtonContainer = styled.div`
    padding: 10px;
`
const PlusButton = styled.div`
    border-radius: 50%;
    width: 25px;
    height: 25px;
    border: 1px solid ${props => props.theme.textColor};
    // background-color: ${props => props.theme.oppositeText};
    position: relative;
    // margin-left: 3px;
    :after {
        content: " ";
        position: absolute;
        display: block;
        background-color: ${props => props.theme.textColor};
        height: 2px;
        margin-top: -2px;
        top: 50%;
        left: 5px;
        right: 5px;
        z-index: 9;
    }
    :before {
        content: " ";
        position: absolute;
        display: block;
        background-color: ${props => props.theme.textColor};
        width: 2px;
        margin-left: -1px;
        left: 50%;
        top: 5px;
        bottom: 5px;
        z-index: 9;
    }
`
const MinusButton = styled.div`
    border-radius: 50%;
    border: 1px solid ${props => props.theme.textColor};
    width: 25px;
    height: 25px;
    position: relative;
    :after {
        content: " ";
        position: absolute;
        display: block;
        background-color: ${props => props.theme.textColor};
        height: 2px;
        margin-top: -1px;
        top: 50%;
        left: 5px;
        right: 5px;
        z-index: 9;
    }
`
const Button = ({show}) => {
    return (
        show ? <MinusButton/> : <PlusButton/>
    )
}

const MenuButton = () => {
    const [ showMenu, setShowMenu ] = useState(true)
    const [ state, dispatch ] = useContext(GlobalContext)
    console.log("state: " + JSON.stringify(state))
    const handleClick = (event) => {
        dispatch( {type: 'SET_MENU'})
        setShowMenu(!showMenu)
    }
    return (
        <MenuButtonContainer onClick={handleClick}>
            <Button show={showMenu}/>
        </MenuButtonContainer>
    )
}

export default MenuButton
