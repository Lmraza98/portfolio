import React, { useState, useEffect, useMemo} from "react";
import App from 'next/app'
import { ThemeProvider as Theme } from "styled-components";
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../app/contexts/ThemeContext'
import { lightMode, darkMode } from '../app/views/shared/styles/Theme'
import { GlobalStyle } from '../app/views/shared/styles/GlobalStyle/GlobalStyle.js'

import Loading from '../app/views/shared/components/templates/Loading'

const StyledTheme = ({children}) => 
{
  const { theme } = useContext(ThemeContext)

  return (
    <Theme theme={theme === 'light' ? lightMode : darkMode}>{
      children
    }</Theme>
  )
}
export default function MyApp({ Component, pageProps }) {
  let [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  })
  
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider>
        <StyledTheme>
          {isMounted ? <Component {...pageProps}/> : <Loading/>}
        </StyledTheme>
      </ThemeProvider>
    </>
  )
}