import React from 'react'

const GlobalContext = React.createContext({
    isBrowser: null,
    isMobile: null
})

export default GlobalContext