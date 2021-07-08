import React, { useState, useContext, useEffect } from "react";
import App from 'next/app'
import { Store, GlobalContext } from '../app/contexts/GlobalContext'
import { Theme } from '../styles/Theme'
import Loading from '../app/views/desktop/components/elements/Loading'
import { getApolloClient, BlogApolloProvider, getPostsByCategory, getInitialPageLoad } from '../app/utilities/apollo-client';


         

function MyApp({ Component, pageProps }) {

  
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  })
  // console.log("mounted" + state.mounted)
  const client = getApolloClient()
  return (
    <Store>
      <Theme>
      <BlogApolloProvider client={client}>
        {isMounted ? <Component {...pageProps}/> : <Loading/>}
        </BlogApolloProvider>
      </Theme>
    </Store>
    
  )
}
export default MyApp