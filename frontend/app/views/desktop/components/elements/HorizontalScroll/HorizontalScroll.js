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
    console.log(JSON.stringify(state.navigation))
    const [scrollPosition, setScrollPosition] = useState(0);
    const [ pos, setPos ] = useState([{"greetings": true}, {"about": false}, {"work": false}, {"contact": false}])
    const scroller = useRef(null)

    // console.log(refPosition(myRef))
    

    useEffect (()=>{
        function updateScrollPosition() {
            let pos = scroller.current.scrollTop
            let max = scroller.current.scrollHeight
            // update the scroll positionnosol.
            if(pos <= (max / 4)){
                console.log("first")
                dispatch({type: 'SET_NAV', payload: [{"greetings":true},{"about":false},{"work":false},{"contact":false}]})
                setScrollPosition(pos)
            }else if(pos <= (max / 4)*2){
                console.log("second")
                dispatch({type: 'SET_NAV', payload:[{"greetings":false},{"about":true},{"work":false},{"contact":false}]})
                setScrollPosition(pos)
            }else if(pos <= (max / 4)*3){
                console.log("third")
                dispatch({type: 'SET_NAV', payload: [{"greetings":false},{"about":false},{"work":true},{"contact":false}] })
                setScrollPosition(pos)
            }else if(pos <= (max / 4)*4){
                console.log("fourth")
                dispatch({type: 'SET_NAV', payload: [{"greetings":false},{"about":false},{"work":false},{"contact":true}]})
                setScrollPosition(pos)
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
