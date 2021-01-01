import React, { Component } from "react";

import "../styles.css";
import { PageProvider } from "../page-context.js";

const MyApp = ({ Component, pageProps }) => {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
};
export default MyApp;
