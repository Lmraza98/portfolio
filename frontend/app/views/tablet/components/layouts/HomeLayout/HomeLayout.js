import { Navbar, Footer } from '../../modules'
import styled from 'styled-components'

const StyledHomeLayout = styled.div`
    display: flex;
    flex-direction: column;
`
function HomeLayout({children}){
    return (
        <>
            <Navbar/>   
                <StyledHomeLayout>
                    {children}
                </StyledHomeLayout>
            <Footer/>
        </>
    )
    
}

export { HomeLayout }