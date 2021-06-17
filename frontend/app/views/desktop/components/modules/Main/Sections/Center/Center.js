import React from 'react'
import Chat from '../../../../elements/Chat'
import HorizontalScroll from 'react-scroll-horizontal'
import { About, Contact, Experience, Greetings, Work } from '../../../../modules'
const Center = () => {
    const child   = { width: `30em`, height: `100%`}
    const parent  = { width: `60em`, height: `100%`}
    return (
        <div style={parent}>
        <HorizontalScroll>

            <div style={child} >somethig </div>
            <div style={child} >somethig</div>
            <div style={child} >somethig</div>
            <div style={child} >somethig </div>
            <div style={child} >somethig</div>
            <div style={child} >somethig</div>
            <div style={child} >somethig </div>
            <div style={child} >somethig</div>
            <div style={child} >somethig</div>
            <div style={child} >somethig </div>
            <div style={child} >somethig</div>
            <div style={child} >somethig</div>
            <div style={child} >somethig </div>
            <div style={child} >somethig</div>
            <div style={child} >somethig</div>
            <div style={child} >somethig </div>
            <div style={child} >somethig</div>
            <div style={child} >somethig</div>

        </HorizontalScroll>
      </div>
    )
}

export default Center
