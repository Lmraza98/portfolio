import React from "react";
import GlobalStyle from '../styles/global'
import "../styles.css";
import {
  isBrowser,
  isMobile
} from "react-device-detect";
import { loadComponents } from "next/dist/next-server/server/load-components";

const ViewContext = React.createContext({
  isBrowser: isBrowser,
  isMobile: isMobile
})

export const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle/>
    <Component {...pageProps}/>
  </>
);

export default MyApp;