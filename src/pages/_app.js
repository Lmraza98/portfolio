import React from "react";
import GlobalStyle from '../styles/global'

import "../styles.css";

export const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle/>
    <Component {...pageProps}/>
  </>
  
);


// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }


export default MyApp;
