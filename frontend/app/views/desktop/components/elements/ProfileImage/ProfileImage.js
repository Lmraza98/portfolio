import React from 'react'
import Image from 'next/Image'
import styled from 'styled-components'


const ProfileImageContainer = styled.div`
    width: 100;
    height: 100;
    padding: 25%;
    border-radius 50%;
    background-color: white;
    align-self: center;
    grid-row-start: 2;
    grid-row-end: 3;
    margin: 5%;
`
const ProfileImage = () => {
    return (
        <ProfileImageContainer>
            <Image src="./profile.jpg" width="750px" height="1000px"/>
        </ProfileImageContainer>
    )
}

export default ProfileImage
