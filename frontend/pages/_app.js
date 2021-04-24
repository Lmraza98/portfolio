import React, { useContext } from "react";
import Head from 'next/head'
import App from 'next/app'
// import { GlobalStyle } from '../src/global/styles'
// import GlobalContext from '../src/global/contexts'

// const globalContext = {
//   theme: ,
//   isBrowser: isBrowser,
//   isMobile: isMobile
// }}
// }

export const MyApp = ({ Component, pageProps }) => (
  
    // <GlobalContext.Provider>
      <Component {...pageProps}/>
    // </GlobalContext.Provider>
);

export default MyApp;