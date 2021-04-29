import { useContext, useState } from 'react'
import Toggle from '../Toggle'
import { ThemeContext, ThemeDispatchContext } from '../../../../shared/styles/ThemeContext'


export default function ThemeToggle(){

    const { theme } = useContext(ThemeContext)
    const setTheme = useContext(ThemeDispatchContext)
    
    console.log("Theme from ThemeToggle.js: " + theme)
    
    const checkedBool = theme === "light" ? false : true
    let [ checked, setChecked ] = useState(checkedBool)

    const toggle = (checked) => {
        console.log("toggle checked value: " + checked)
    
        if(checked)
        {
            setTheme({theme: "light"})
        }
        else{
            setTheme({theme: "dark"})
        }
        setChecked()
        
    }

    return (
        <Toggle checked={checked} onChange={toggle}/>
    )
}