import { Navbar, Chat, Greetings, About, Experience, Work, Contact, Footer } from '../../modules'
import { SideMenu } from '../../elements'
import styled from 'styled-components'
import { useContext } from 'react'
import { GlobalContext } from '../../../../../contexts/GlobalContext'

const HomeLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.backgroundColor};
    transition: background-color 0.5s ease;
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
    console.log('Menu: ' + menu)
    return (
        <>
        <HomeLayoutContainer>
            <Navbar/>
            {
                menu ? 
                <>
                    <SideMenu/>
                    <Chat>
                        <AboutGridItem/>
                        <ExperienceGridItem/>
                        <WorkGridItem/>
                        <ContactGridItem/>
                    </Chat>
                </>  :
                <>
                <Chat>
                    <AboutGridItem/>
                    <ExperienceGridItem/>
                    <WorkGridItem/>
                    <ContactGridItem/>
                </Chat>
            </>

            }
            
            
        </HomeLayoutContainer>
        <Footer/>
        </>
    )
}

export { HomeLayout }