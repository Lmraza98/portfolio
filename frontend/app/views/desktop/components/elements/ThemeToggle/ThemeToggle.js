import { useContext, useState } from 'react'
import Toggle from '../Toggle'
import { ThemeContext, ThemeDispatchContext } from '../../../../shared/styles/ThemeContext'


export default function ThemeToggle(){

    const { theme } = useContext(ThemeContext)
    const setTheme = useContext(ThemeDispatchContext)
    
    console.log("Theme from ThemeToggle.js: " + theme)
    
    const checkedBool = (theme === "light" ? false : true)
    let [ checked, setChecked ] = useState(checkedBool)

    const toggle = (checked) => {
        setTheme(theme === 'light' ? {theme: "dark"} : {theme: "light"})
        setChecked()
    }

    return (
        <Toggle checked={checked} onChange={toggle}/>
    )
}