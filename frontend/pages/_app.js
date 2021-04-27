import React from "react";
import App from 'next/app'
import GlobalStyle from '../app/views/shared/styles/GlobalStyle'
import { theme, ThemeContext } from '../app/views/shared/styles/ThemeContext/ThemeContext'

export const MyApp = ({ Component, pageProps }) => (
  <>
      <ThemeContext>
          <GlobalStyle/>
        <Component {...pageProps}/>
      </ThemeContext>
  </>
);

export default MyApp;