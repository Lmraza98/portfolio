import React, { useContext } from 'react'
import styled from 'styled-components'
import { MainScroll } from '../../../../elements'
import { About, Contact, Experience, Greetings, Work } from '../../../../modules'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { GlobalContext } from '../../../../../../../contexts/GlobalContext'

const Module = ({children}) => {
    return (
        <Module>{children}</Module>
    )
}
const Center = () => {
    const [state, dispatch] = useContext(GlobalContext)

    const greetings = state.greetings
        return (
        <MainScroll scroll={state.greetings}>
            {
                greetings 
                ? 
                <Greetings banner={greetings}/> 
                :
                <>
                    <Greetings/>
                    <About/>
                    <Work/>
                    <Contact/>
                </>
                
            }
            
        </MainScroll>

        
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
