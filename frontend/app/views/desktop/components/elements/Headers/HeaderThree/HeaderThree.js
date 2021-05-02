import styled from 'styled-components'

const HeaderThreeStyled = styled.h1`
    font-family: ${props => props.theme.headerFont};
    color: ${props => props.theme.headerColor};
    size: ${props => props.theme.h3TextSize};
`

export const HeaderThree = ({children}) => {
    return (
        <HeaderThreeStyled>{
            children
        }</HeaderThreeStyled>
    )
}
