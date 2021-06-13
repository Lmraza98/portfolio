import { Navbar, SideMenu, Main, Greetings, About, Experience, Work, Contact, Footer } from '../../modules'
import styled from 'styled-components'
import { useContext } from 'react'
import { GlobalContext } from '../../../../../contexts/GlobalContext'

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
    // height: 100%;
    // width: 100%;
`

function HomeLayout({children}){
    const [ state, dispatch ] = useContext(GlobalContext)
    const menu = state.menu
    return (
        <Container>
        <HomeLayoutContainer>
            <SideMenu show={menu}/>
            <Main>
                {/*  */}
            </Main>
            
        </HomeLayoutContainer>
        <Footer/>
        </Container>
    )
}

export { HomeLayout }