import { useContext, useState } from 'react'
import Toggle from '../Toggle'
import { GlobalContext, Store } from '../../../../../contexts/GlobalContext'


export default function ThemeToggle(){
    let [ state, dispatch] = useContext(GlobalContext)
    const theme = state.theme
    
    const checkedBool = (theme === "light" ? false : true)
    let [ checked, setChecked ] = useState(checkedBool)

    const toggle = (checked) => {
        dispatch({type: 'SET_THEME', payload: checked})
        setChecked()
    }

    return (
        <Toggle checked={checked} onChange={toggle}/>
    )
}