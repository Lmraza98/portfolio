import { useContext, useState } from 'react'
import Toggle from '../Toggle'
import { GlobalContext, GlobalDispatchContext } from '../../../../../contexts/GlobalContext'


export default function ThemeToggle(){

    const { theme } = useContext(GlobalContext)
    const setGlobal = useContext(GlobalDispatchContext)
    
    console.log("Theme from ThemeToggle.js: " + theme)
    
    const checkedBool = (global === "light" ? false : true)
    let [ checked, setChecked ] = useState(checkedBool)

    const toggle = (checked) => {
        setGlobal( theme === 'light' ? {theme: "dark", ...global} : {theme: "light", ...global})
        setChecked()
    }

    return (
        <Toggle checked={checked} onChange={toggle}/>
    )
}