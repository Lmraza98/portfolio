import styled from 'styled-components'
import { useEffect } from 'react'
import { LogoBlack } from '../Logo/Logo.js'
import { useSpring, animated } from 'react-spring'
const LoadingContainer = styled.div`
    position: absolute;
    top: 45%;
    left: 45%;
`

export function Loading({children}) {
    const styles = useSpring({
      loop: true,
      from: { rotateZ: 0 },
      to: { rotateZ: 360 },
    })


  
    return (
        <LoadingContainer>
            <animated.div
                style={styles}
            >
                <LogoBlack/>
            </animated.div>
      </LoadingContainer>
    )
  }