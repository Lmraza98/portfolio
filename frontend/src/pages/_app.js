import React, { useContext } from "react";
import Head from 'next/head'
import App from 'next/app'
import { GlobalStyle } from '../global/styles'
import GlobalContext from '../global/contexts'
import DetectDevice from '../utilities/DetectDevice'
import { lightTheme, darkTheme } from '../global/styles/theme.js'

// const globalContext = {
//   theme: ,
//   isBrowser: isBrowser,
//   isMobile: isMobile
// }}
// }

export const MyApp = ({ Component, pageProps }) => (
  
    <GlobalContext.Provider
    >
      <Component {...pageProps}/>
    </GlobalContext.Provider>
);

export default MyApp;