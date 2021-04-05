import React from "react";
import GlobalStyle from '../styles/global'

import "../styles.css";

export const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle/>
    <Component {...pageProps}/>
  </>
);

export default MyApp;
