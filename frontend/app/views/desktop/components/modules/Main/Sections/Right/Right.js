import React from 'react'
import styled from 'styled-components'
const ChatUserMenuContainer = styled.div`
    display: grid;
    grid-template-rows: 20% 5% 35% 5% 35%;
    height: 100%;
`
const Online = styled.div`
    padding 10%;
    grid-row-start: 2;
    grid-row-end: 3;
`
const Offline = styled.div`
    padding 10%;
    grid-row-start: 4;
    grid-row-end: 5;
`

const Right = () => {
    return (
        <ChatUserMenuContainer>
                {/* <ThemeToggleContainer><ThemeToggle/></ThemeToggleContainer> */}
                    
                    <Online>Online</Online>
                    <Offline>Offline</Offline>
                </ChatUserMenuContainer>
    )
}

export default Right
