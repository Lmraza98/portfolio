import React, { useRef, useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../../../../../contexts/GlobalContext'

const HorizontalScrollContainer = styled.div`
height: 100%;
    height: 100%;
    ::-webkit-scrollbar {
        display: none;
    }
    overflow-y: auto;

`

export default function HorizontalScroll({children}) {

    const [ state, dispatch ] = useContext(GlobalContext)
   
    const [scrollPosition, setScrollPosition] = useState(0);
    const [ pos, setPos ] = useState([{"greetings": true}, {"about": false}, {"work": false}, {"contact": false}])
    const scroller = useRef(null)

    // console.log(refPosition(myRef))
    

    useEffect (()=>{
        function updateScrollPosition() {
            let pos = scroller.current.scrollTop
            let max = scroller.current.scrollHeight
            // update the scroll positionnosol.
            if(pos <= ((max / 4) - (max / 8) )){
                
                dispatch({type: 'SET_NAV', payload: [{"greetings":true},{"about":false},{"work":false},{"contact":false}]})
              
            }else if(pos <= ((max / 4)*2)- (max / 8)){
                
                dispatch({type: 'SET_NAV', payload:[{"greetings":false},{"about":true},{"work":false},{"contact":false}]})
            
            }else if(pos <= ((max / 4)*3)- (max / 8)){
              
                dispatch({type: 'SET_NAV', payload: [{"greetings":false},{"about":false},{"work":true},{"contact":false}] })
               
            }else if(pos <= ((max / 4)*4)- (max / 8)){
             
                dispatch({type: 'SET_NAV', payload: [{"greetings":false},{"about":false},{"work":false},{"contact":true}]})
            
            }
        }

        if (scroller && scroller.current) {
            scroller.current.addEventListener("scroll", updateScrollPosition, false);
            return function cleanup() {
                 scroller.current.removeEventListener("scroll", updateScrollPosition, false);
            };
        }
    },[])
    
    
    
    return (
        <HorizontalScrollContainer ref={scroller}>
        {
            children
        }
        </HorizontalScrollContainer>
    )
}
