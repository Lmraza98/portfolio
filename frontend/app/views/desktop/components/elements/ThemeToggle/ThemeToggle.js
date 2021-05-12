import { useContext, useState } from 'react'
import Toggle from '../Toggle'
import { GlobalContext, GlobalDispatchContext } from '../../../../../contexts/GlobalContext'


export default function ThemeToggle(){
    
    let { theme } = useContext(GlobalContext)
    const setGlobal = useContext(GlobalDispatchContext)
    let global = useContext(GlobalContext)
    console.log("Global Context: " + JSON.stringify(global))
    console.log("Theme from ThemeToggle.js: " + theme)
    
    const checkedBool = (theme === "light" ? false : true)
    let [ checked, setChecked ] = useState(checkedBool)

    const toggle = (checked) => {
        setGlobal( theme === 'light' || undefined ? {theme: "dark", ...global} : {theme: "light", ...global})
        setChecked()
    }

    return (
        <Toggle checked={checked} onChange={toggle}/>
    )
}