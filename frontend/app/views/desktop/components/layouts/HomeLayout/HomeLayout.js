import { Navbar, SideMenu, Main, Greetings, About, Experience, Work, Contact, Footer } from '../../modules'
import styled from 'styled-components'
import { useContext } from 'react'
import { GlobalContext } from '../../../../../contexts/GlobalContext'
import HorizontalScroll from 'react-scroll-horizontal'
 
// const HorizontalScrollMain = ({children}) => {
//     return (
//         <HorizontalScroll>
//             {children}
//         </HorizontalScroll>
//     )
// }
const HomeLayoutContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.backgroundColor};
    transition: background-color 0.5s ease;
    z-index: -2;
    // transition: ease;
`
const Container = styled.div
`
    // 
`

function HomeLayout({children}){
    const [ state, dispatch ] = useContext(GlobalContext)
    const menu = state.menu
    return (
        <HomeLayoutContainer>
            {/* <SideMenu show={menu}/> */}
                <Main/>
            
        </HomeLayoutContainer>
    )
}

export { HomeLayout }