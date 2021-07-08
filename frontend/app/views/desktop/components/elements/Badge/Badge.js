import React from 'react'
import styled from 'styled-components'
import Image from 'next/Image'
const BadgeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    // align-items: flex-start;
    height: 100%;
`

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 100px;
    background-color: #F8EB77;
    color: black;
    height: 50px;
    width: 200px;
    font-size: 25px;
    text-align: center;
    align-self: center;
    // justify-self: center;
    // justify-content: center;
    border: 5px solid black;
    
`
const Description = styled.div`
    text-align: center;
    align-self: center;
    font-size: 18px;
    width: 80%;
    margin: 1rem;
`
const ImageContainer = styled.div`
    align-self: center;

`

const Badge = ({title, desc, src, width, height}) => {
    return (
        <BadgeContainer>
                <Heading>
                    {
                        title
                    }
                </Heading>
            
            <Description>
                {
                    desc
                }
            </Description>
            <ImageContainer>
                <Image height={height} width={width} src={src}></Image>
            </ImageContainer>
        </BadgeContainer>
    )
}

export default Badge
