import { useContext } from 'react'
import { GlobalContext } from '../../app/contexts/GlobalContext'
import { ThemeProvider } from "styled-components";
const theme = {
    navLinkTextSize: '12px',
    navFont: 'Bebas Neue',
    headerFont: 'Baskerville',  
    textSize: '12px',
    h1TextSize: '20px',
    h2TextSize: '18px',
    h3TextSize: '16px',
    messageInputTextSize: '35px',
    messageTextSize: '35px'
}
const lightColors = {
    backgroundColor: '#FFFDFD',
    navBackgroundColor: '#FFFDFD ',
    navLinkColor: '#000000',
    pageLinkColor: '#0B3C49',
    textColor: '#000000',
    headerColor: '#000000',
    chatBackgroundColor: '#C4C4C4',
    chatForegroundColor: '#FFFDFD',
    userMessageColor: '#c02739',
    // botMessageColor: '#000000',
    botMessageColor: '#393e46',
    oppositeText: '#FFFFFF'
}
const darkColors = {
    backgroundColor: '#013948',
    navBackgroundColor: '#0B3C49',
    navLinkColor: '#FFFFFF',
    pageLinkColor: '#B2B2B2',
    textColor: '#FFFFFF',
    headerColor: '#ffffff',
    chatBackgroundColor: '#444343',
    chatForegroundColor: '#013948',
    userMessageColor: '#1cc5dc',
    botMessageColor: '#393e46',
    oppositeText: '#000000'
}
const lightMode = {
    mode: "light",
    ...theme,
    ...lightColors
}
const darkMode = {
    mode: "dark",
    ...theme,
    ...darkColors
}
export const Theme = ({children}) => 
{
  const { theme } = useContext(GlobalContext)
  // const { theme } = useContext(ThemeContext)

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>{
        children
      }</ThemeProvider>
    </>
  )
}