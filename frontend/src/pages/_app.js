import React from "react";
import Head from 'next/head'
import App from 'next/app'
import GlobalStyle from '../global/styles'
import GlobalContext from '../global/contexts'

export const MyApp = ({ Component, pageProps }) => (
  
    <GlobalContext.Provider
      value={{
        theme: {
          lightMode: {

          },
          darkMode: {

          }
        },
        isBrowser: isBrowser,
        isMobile: isMobile
      }}
    >
      <Component {...pageProps}/>
    </GlobalContext.Provider>
);

export default MyApp;