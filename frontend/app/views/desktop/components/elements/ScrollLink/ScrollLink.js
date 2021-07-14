import Scroll from 'react-scroll'
import styled from 'styled-components'
const Link = Scroll.Link;
export const LinkScroller = Scroll.scroller;

const StyledScrollLink = styled.div
`
//   display: ${ props => props.show ? 'block'  : "none"};
  text-decoration: none;
  color: ${ props => props.show ? props.theme.navLinkColor : 'grey' };
  font-family: "${ props => props.theme.navFont}";
  font-size: 50px;
  
  opacity: ${ props => props.main ? '1'  : "0"};
//   height: ${ props => props.main ? '40px'  : "0"};

  transition: all .5s linear;
  text-align: right;
`

export const ScrollLink = ({children, name, show, main}) => {
    return (
        <Link smooth={true} to={name} duration={500}>
        <StyledScrollLink main={main} show={show}>{
            children    
        }</StyledScrollLink>
        </Link> 
    )
}
