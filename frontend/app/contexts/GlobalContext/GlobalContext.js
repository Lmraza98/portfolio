import React, { useState } from "react"

export const GlobalContext = React.createContext(undefined)
export const GlobalDispatchContext = React.createContext(undefined)

export function GlobalProvider({children}){
    const [global, setGlobal] = useState({
        loaded: false,
        theme: 'light'
    })

    return (
        <GlobalContext.Provider value={global}>
            <GlobalDispatchContext.Provider value={setGlobal}>
            {children}
            </GlobalDispatchContext.Provider>
        </GlobalContext.Provider>
    )
}