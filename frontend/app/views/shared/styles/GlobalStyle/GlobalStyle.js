import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    
    body {
        --nav-link-text-size: 12px;
        --text-size: 12px;
        --header-one-text-size: ${props.theme.h1TextSize};
        --header-two-text-size: ${props.theme.h2TextSize};
        --header-two-text-size: ${props.theme.h3TextSize};

        --background-color: ${theme.backgroundColor};
        --nav-background-color: ${theme.navBackgroundColor};
        --nav-link-color: ${theme.navLinkColor};

        --text-color: ${theme.textColor}
    }
`