import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
  
`
export const GlobalStyle = () => {
    return (
        <>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
            </style>
            <Style/>
        </>
    )
}