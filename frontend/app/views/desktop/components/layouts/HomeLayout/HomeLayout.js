import { Navbar, Footer } from '../../modules'
import styled from 'styled-components'

const StyledHomeLayout = styled.div`
    display: flex;
    flex-direction: column;
`
function HomeLayout({children}){
    return (
        <div>
            <Navbar/>   
                <StyledHomeLayout>
                    {children}
                </StyledHomeLayout>
            <Footer/>
        </div>
    )
    
}

export { HomeLayout }