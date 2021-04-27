import Toggle from '../Toggle'
import styled from 'styled-components'
import { lightMode, darkMode, ThemeContext } from '../../../../shared/styles/ThemeContext'
export default function ThemeToggle(props){

    let [theme, setTheme] = useContext(ThemeContext)
      
    const toggleTheme = () => {
        const mode = theme.mode === "light" ? darkMode : lightMode
        setTheme(mode)
    }

    return (
        <ThemeToggle>
            <Toggle value={theme} toggle={toggleTheme}/>
        </ThemeToggle>
    )
}
