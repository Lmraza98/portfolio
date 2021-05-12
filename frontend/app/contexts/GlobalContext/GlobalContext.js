import React, { useState } from "react"

export const GlobalContext = React.createContext()
export const GlobalDispatchContext = React.createContext(undefined)

export function GlobalProvider({children, isMounted}){
    const [global, setGlobal] = useState({
        mounted: isMounted,
        theme: 'light',
        menu: true
    })
    return (
        <GlobalContext.Provider value={global}>
            <GlobalDispatchContext.Provider value={setGlobal}>
            {children}
            </GlobalDispatchContext.Provider>
        </GlobalContext.Provider>
    )
}