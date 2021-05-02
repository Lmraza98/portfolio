import { Navbar, Greetings, About, Experience, Work, Contact, Footer } from '../../modules'
import styled from 'styled-components'
const HomeLayoutContainer = styled.div`
    width: 100%;
    background-color: ${(props) => {props.theme.backgroundColor}}
`
const HomeSectionFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const GreetingsGridItem = styled(Greetings)`
    display: flex;
    flex-direction: column;
    
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
    return (
        <HomeLayoutContainer>
            
            <Navbar/>
            <HomeSectionFlexContainer>
                <GreetingsGridItem/>
                <AboutGridItem/>
                <ExperienceGridItem/>
                <WorkGridItem/>
                <ContactGridItem/>
            </HomeSectionFlexContainer>
            <Footer/>
        </HomeLayoutContainer>
    )
    
}

export { HomeLayout }