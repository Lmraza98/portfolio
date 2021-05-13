import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import ProfileCard from '../../../../elements/ProfileCard'

import { GlobalContext, Store } from '../../../../../../../contexts/GlobalContext'
const LeftContainer = styled.div`



`
const CardContainer = styled.div`
    position: flex;
    flex-direction: row;
    justify-content: column;
    align-items: center;
    height: 100%;
    background-color: rgba(255, 255, 255, .15);  
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
    // background-color: ${props => props.theme.textColor};
    position: relative;
    // margin-left: 3px;
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
const MenuButtonContainer = styled.div`



`
const MenuButton = ({show}) => {
    return (
        show ? <MinusButton/> : <PlusButton/>
    )
}

const Left = () => {
    const [ showMenu, setShowMenu ] = useState(true)
    const [ state, dispatch ] = useContext(GlobalContext)
    console.log("state: " + JSON.stringify(state))
    const handleClick = (event) => {
        dispatch( {type: 'SET_MENU'})
        setShowMenu(!showMenu)
    }
    return (
        <CardContainer>
            <ProfileCard>
                <MenuButtonContainer onClick={handleClick}>
                    <MenuButton show={showMenu}/>
                </MenuButtonContainer>
            </ProfileCard>
        </CardContainer>
    )
}

export default Left
