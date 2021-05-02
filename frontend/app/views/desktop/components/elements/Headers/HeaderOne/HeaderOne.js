import styled from 'styled-components'

const HeaderOneStyled = styled.h1`
font-family: ${props => props.theme.headerFont};
color: ${props => props.theme.headerColor};
size: ${props => props.theme.h1TextSize};
`

export const HeaderOne = ({children}) => {
    return (
        <HeaderOneStyled>{
            children
        }</HeaderOneStyled>
    )
}
