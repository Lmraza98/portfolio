import { useContext } from 'react'
import { Desktop_Navbar } from './Navbar.js'

import { GlobalContext } from '../../../../../contexts/GlobalContext'

function Navbar({children}){
    const { mounted } = useContext(GlobalContext)

    return (
        
        <Desktop_Navbar/>
    )
}

export default Navbar