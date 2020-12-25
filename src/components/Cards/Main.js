import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Main_container = styled.div`
    // display: inherit;
    margin: 10px;
    z-index: 20;
    // height: inherit;
    // width: 100%;
    // padding: 10px;
    // flex-grow: 1;


`
const StyledImage = styled(Image)`
    border-radius: 20px;
    // height: 100%;
    // width: 100%;
    display: inherit;

`

const Main = (props) => {
    return (
        <Main_container>
            <StyledImage 
                src="/static/profile.jpg"
                alt="Professional Headshot of Me"
                width={439}
                height={636}
                layout='intrinsic'
            >
                
            </StyledImage>
        </Main_container>
    )
}

export default Main