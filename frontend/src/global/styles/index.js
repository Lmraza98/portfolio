import { createGlobalStyle } from 'styled-components'
import base from './base'
import reset from 'styled-reset'
import { lightTheme, darkTheme } from './theme'

export { lightTheme, darkTheme }
export const GlobalStyle  = createGlobalStyle`
   ${reset}
   ${base}
`