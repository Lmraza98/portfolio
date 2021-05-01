import { Desktop_Navbar } from './Navbar.js'
import Transition from '../../elements/Transition'

const Navbar = ({children}) => {
    return (
        <Transition>
            <Desktop_Navbar/>
        </Transition>
    )
}

export default Navbar