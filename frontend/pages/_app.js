import React, { useState, useEffect } from "react";
import App from 'next/app'
import { GlobalProvider } from '../app/contexts/GlobalContext'
import { Theme } from '../styles/Theme'

import Loading from '../app/views/shared/components/templates/Loading'


export default function MyApp({ Component, pageProps }) {
  let [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  })
  
  return (
    <>
      <GlobalProvider>
        <Theme>
          {isMounted ? <Component {...pageProps}/> : <Loading/>}
        </Theme>
      </GlobalProvider>
    </>
  )
}