import importLink from 'next/link'
import styled from 'styled-components'
import React ,{ Component} from 'react'
const  StyledLink = styled(importLink)`
    color: #17252A;
    font-family: 'Source Code Pro', monospace;
    font-size: 25px;
    text-decoration: none;
    margin-top 20px;
    
`;


export default class Link extends Component {
    render() {
        return (
            
            <StyledLink href={this.props.link}>
                <a>{this.props.children}</a>
            </StyledLink>
            
        )
    }
}