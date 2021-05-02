import { Spring, animated, useSpring } from 'react-spring'
import { useEffect } from 'react'
export function Transition({children, toggle}){
    const styles = useSpring({   
        from: { opacity: 0 }, 
        to: { opacity: 1 },
        config: { duration: 1000 }
        
    })
    return (
            <animated.div style={styles}>{children}</animated.div>
    )
}
