import styled, { keyframes } from 'styled-components'
import Svg from '../../Svg'
import { useContext } from 'react'
import { GlobalContext } from '../../../../../../contexts/GlobalContext'

const GreetingsLineContainer = styled.div`
    display: flex; 
    flex-direction: column;
`
const GreetingsLineStyled = styled.div`
    transform: rotate(90deg);
`
const Square = styled.div`
    background-color: ${props => props.theme.textColor};
    height: 100px;
    width: 100px;
`
const Rotate =  styled.div`
    transform: rotatate(90deg); 
`
const draw = keyframes`
from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: 0;
  }
`

const LineSvg = styled(Svg)`
    width: 761px;
    height: 78px;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ${draw} 20s linear forwards;

    .path {
        fill: white;
        // fill: ${props => props.theme.backgroundColor};
        stroke: ${props => props.theme.textColor};
        // stroke: white;
        stroke-width: 4px;
        // stroke: black;
        
    }

`

function Line({color, fill, attrs}){
    return (
        <LineSvg className={LineSvg} viewBox="0 0 761 78" fill="none">

            <path className="path" d="m3.9-4.5h2.5v4.2c-0.8 0.3-1.6 0.4-2.5 0.4-1 0-1.8-0.4-2.4-1.2s-0.8-1.8-0.8-3.2c0-1.4 0.3-2.4 0.9-3.2s1.5-1.2 2.6-1.2c0.8 0 1.4 0.2 2 0.5l-0.3 1c-0.6-0.4-1.2-0.5-1.7-0.5-0.8 0-1.3 0.3-1.8 0.9s-0.6 1.4-0.6 2.5c0 2.3 0.8 3.4 2.3 3.4 0.4 0 0.8-0.1 1.2-0.2v-2.6h-1.4v-0.8z" />
            {/* <path className="path" d="M68 35.5L36.5 70L2 35.5L36.5 1L68 35.5ZM68 35.5H300.5H322C327.809 35.5655 333.644 32.5182 348.5 21C346.961 24.9178 344.776 29.7752 342.758 34.5M337.5 50.5C337.5 47.3087 339.969 41.0311 342.758 34.5M342.758 34.5H357.5M357.5 34.5C354.833 41.1667 353 54.5 359.5 48.5L365 39.5M357.5 34.5C359.167 30.5 362.7 22.2 363.5 21M365 39.5C366.5 36.5 368.5 33.5 371.5 34C374 34.4167 375 36.5 375 36.5C375.081 36.8247 375.178 37.3785 375.21 38M365 39.5C365 39.5 362.5 47 363.5 49C364.5 51 369 52 371.5 48C374.366 43.4137 374.5 41.5 375 40C375.205 39.3844 375.244 38.6547 375.21 38M375.21 38C374.64 37.6667 373.5 36.75 373 37.5C372 39 373.333 41 374 42L375.5 44C377.5 46 379.1 44.7 381.5 41.5C384.5 37.5 384 34.5 384 34C384 33.6 381 44.8333 379.5 50.5C381 45.6667 385 35.8 389 35C391.521 34.4957 391.924 36.6138 391.584 39M391.584 39C391.182 40.5 390.848 41.7463 390.5 43L388.5 50.5L391.584 39ZM391.584 39C394.5 36 399 33.5 400 35.5C401 37.5 399.5 42 399 44.5C398.366 47.6684 398.7 51 401.5 49C404.3 47 406.167 43.6667 407 42.5M407 42.5L408.75 39.75M407 42.5C406.667 45.1667 407.1 50.5 411.5 50.5C415.9 50.5 423.667 40.5 427 35.5H749M408.75 39.75L410.5 37C411.833 35.6667 414.9 33.2 416.5 34C418.1 34.8 418.5 36.3333 418.5 37C418.833 37.5 418.9 38.8 416.5 40C413.5 41.5 411.5 42 408.75 39.75Z" /> */}
        </LineSvg>
    )
}

export const GreetingsLine = () => {
    return (
        <GreetingsLineContainer>
            <GreetingsLineStyled>
                <Line/>
                
            </GreetingsLineStyled>
        </GreetingsLineContainer>

    )
}
