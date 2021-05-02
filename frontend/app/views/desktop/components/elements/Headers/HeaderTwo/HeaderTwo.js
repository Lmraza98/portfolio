import styled from 'styled-components'

const HeaderTwoStyled = styled.h1`
    font-family: ${props => props.theme.headerFont};
    color: ${props => props.theme.headerColor};
    size: ${props => props.theme.h2TextSize};
`
export const HeaderTwo = ({children}) => {
    return (
        <HeaderTwoStyled>
            {children}
        </HeaderTwoStyled>
    )
}
