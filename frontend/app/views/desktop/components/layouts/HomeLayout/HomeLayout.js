import { Navbar, Chat, Greetings, About, Experience, Work, Contact, Footer } from '../../modules'
import { SideMenu } from '../../elements'
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
    // transition: ease;
`
const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    transition: ease;
    width: 100%;
    height: 100%;
`
const GreetingsGridItem = styled(Greetings)`
    // display: flex;
    // flex-direction: row;
    // // height: 400px;
    height: 100%;
`
const AboutGridItem = styled(About)`
    display: flex;
    flex-direction: column;
`
const ExperienceGridItem = styled(Experience)`
    display: flex;
    flex-direction: column;
`
const WorkGridItem = styled(Work)`
    display: flex;
    flex-direction: column;
`
const ContactGridItem = styled(Contact)`
    display: flex;
    flex-direction: column;
`

function HomeLayout({children}){
    const [ state, dispatch ] = useContext(GlobalContext)
    const menu = state.menu
    return (
        <>
        <HomeLayoutContainer>
            <SideMenu show={menu}/>
            <Chat>
                <AboutGridItem/>
                <ExperienceGridItem/>
                <WorkGridItem/>
                <ContactGridItem/>
            </Chat>
        </HomeLayoutContainer>
        <Footer/>
        </>
    )
}

export { HomeLayout }