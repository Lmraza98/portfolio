import React, { useState, useContext, useEffect } from "react";
import App from 'next/app'
import { Store, GlobalContext } from '../app/contexts/GlobalContext'
import { Theme } from '../styles/Theme'
import Loading from '../app/views/desktop/components/elements/Loading'


function MyApp({ Component, pageProps }) {

  
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  })
  // console.log("mounted" + state.mounted)
  
  return (
    <Store>
      <Theme>
        {isMounted ? <Component {...pageProps}/> : <Loading/>}
      </Theme>
    </Store>
    
  )
}
export default MyApp