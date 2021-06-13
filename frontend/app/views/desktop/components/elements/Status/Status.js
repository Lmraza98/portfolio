import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../../../../contexts/GlobalContext'
import styled from 'styled-components'

const StatusContainer = styled.div`
    // height: 100%;
    background-color: white;
    // // border-radius: 15px;
    // margin: 5px;
    // padding: 5px;
    // display: flex;
    // flex-direction: column;
    // border-top-right-radius: 25%;
    // border-top-left-radius: 25%;
    // border-bottom-right-radius: 25%;
    // border-bottom-left-radius: 25%;
    // // justify-self: center;

`
const Offline = styled.h1`
    
`
const Online = styled.h1`
    
`

function Status() {
    const [ isOnline, setIsOnline ] = useState(false)
    const [ state ] = useContext(GlobalContext);
    // state.online === true ? setIsOnline(true) : false
    const status = isOnline ? <Online>Online</Online> : <Offline>Offline</Offline>
    return (
        <StatusContainer>
        {
            status
        }
        </StatusContainer>
    )
}

export default Status
