import Scroll from 'react-scroll'

const Element = Scroll.Element;
export const scroller = Scroll.scroller;

export const ScrollElement = ({children, name}) => {
    return (
        <Element name={name}>{
            children    
        }</Element>
    )
}
