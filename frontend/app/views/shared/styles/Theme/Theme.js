const theme = {
    navLinkTextSize: '12px',
    navFont: 'Bebas Neue',
    textSize: '12px',
    h1TextSize: '20px',
    h2TextSize: '18px',
    h3TextSize: '16px'
}
const lightColors = {
    backgroundColor: '#FFFDFD',
    navBackgroundColor: '#FFFDFD ',
    navLinkColor: '#000000',
    pageLinkColor: '#0B3C49',
    textColor: '#000000',
    headerColor: '#000000'
}
const darkColors = {
    backgroundColor: '#013948',
    navBackgroundColor: '#0B3C49',
    navLinkColor: '#FFFFFF',
    pageLinkColor: '#B2B2B2',
    textColor: 'blue',
    headerColor: '#ffffff'
}
export const lightMode = {
    mode: "light",
    ...theme,
    ...lightColors
}
export const darkMode = {
    mode: "dark",
    ...theme,
    ...darkColors
}