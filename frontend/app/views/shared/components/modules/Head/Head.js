import NextHead from "next/head";
import { GoogleFonts } from "next-google-fonts";
import * as React from "react";

export const Head = ({ title }) => {
    return (
        <React.Fragment>
            <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
            <NextHead>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />

            <title>{title}</title>
            </NextHead>
        </React.Fragment>
    )
}
  
;