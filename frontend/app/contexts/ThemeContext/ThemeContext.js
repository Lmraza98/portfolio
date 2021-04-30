import React, { useState } from "react"

export const ThemeContext = React.createContext(undefined)
export const ThemeDispatchContext = React.createContext(undefined)

export function ThemeProvider({children}){
    const [theme, setTheme] = useState({
        theme: "light"
    })
    // console.log("theme: " + state)
    return (
        <ThemeContext.Provider value={theme}>
            <ThemeDispatchContext.Provider value={setTheme}>
            {children}
            </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
    )
}
// export function ThemeContextConsumer({children}) {
//     return (
//         <ThemeContext.Consumer>{
//             (theme, setTheme) => children(theme, setTheme)
//         }</ThemeContext.Consumer>
//     )
// }