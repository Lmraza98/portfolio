import React from 'react'
import styled from 'styled-components'
import { HorizontalScroll } from '../../../../elements'
import { About, Contact, Experience, Greetings, Work } from '../../../../modules'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Module = ({children}) => {
    return (
        <Module>{children}</Module>
    )
}
const Center = () => {
    
    return (
        <HorizontalScroll>
            <Greetings/>
            <About/>
            <Work/>
            <Contact/>
        </HorizontalScroll>

        
        // <HorizontalScroll>
        //     <Parallax className="no-scrollbar" pages={4} style={{ position: "relative", height: "100%" }}>
        //     <style>{`
        //         .no-scrollbar::-webkit-scrollbar  {
        //             display: none;
        //        }
        //     `}</style>
            
        //         <ParallaxLayer
        //             offset={0}
        //             speed={2.5}
        //             style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        //             <Greetings/> 
        //         </ParallaxLayer>
        //         {/* <ParallaxLayer
        //             offset={0}
        //             speed={4}
        //             style={{ backgroundColor: '#ff6d6d'  }}>
        //         </ParallaxLayer> */}

        //         <ParallaxLayer
        //             offset={1}
        //             speed={2.5}
        //             style={{
        //             display: 'flex',
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //             // color: 'white',
        //             }}>
        //              <About/>
        //         </ParallaxLayer>
        //         <ParallaxLayer
        //             offset={2}
        //             speed={2.5}
        //             style={{
        //             display: 'flex',
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //             // color: 'white',
        //             backgroundColor: '#ff6d6d' 
        //             }}>
        //             <Work/>
        //         </ParallaxLayer>
        //         <ParallaxLayer
        //             offset={4}
        //             speed={2.5}
        //             style={{
        //             display: 'flex',
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //             // color: 'white',
        //             }}>
        //             <Contact/>
        //         </ParallaxLayer>
        //         </Parallax>
        //         </HorizontalScroll>
            
        
    )
}

export default Center
