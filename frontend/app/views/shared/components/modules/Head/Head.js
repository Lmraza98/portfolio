import NextHead from "next/head";
import * as React from "react";

export const Head = ({ title }) => {
    return (
        <React.Fragment>
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