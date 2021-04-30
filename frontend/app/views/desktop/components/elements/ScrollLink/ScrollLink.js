import Scroll from 'react-scroll'
import styled from 'styled-components'
const Link = Scroll.Link;
export const scroller = Scroll.scroller;

const StyledScrollLink = styled.div
`
  text-decoration: none;
  color: ${ props => props.theme.navLinkColor };
  font-family: "${ props => props.theme.navFont}";
  font-size: ${ props => props.theme.h1TextSize };
`

export const ScrollLink = ({children, name}) => {
    return (
        <Link smooth={true} to={name} duration={500}>
        <StyledScrollLink >{
            children    
        }</StyledScrollLink>
        </Link>
    )
}
