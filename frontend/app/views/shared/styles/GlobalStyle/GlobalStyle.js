import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

    body {
        --nav-link-text-size: 12px;
        --text-size: 12px;
        --header-one-text-size: ${props => props.h1TextSize};
        --header-two-text-size: ${props => props.h2TextSize};
        --header-two-text-size: ${props => props.h3TextSize};

        --background-color: ${props => props.backgroundColor};
        --nav-background-color: ${props => props.navBackgroundColor};
        --nav-link-color: ${props => props.navLinkColor};
        --text-color: ${props => props.textColor}
    }
`