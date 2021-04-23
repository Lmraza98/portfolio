import { Navbar, Footer } from '../../modules'
import StyledHomeLayout from './styled.js'
const HomeLayout = ({children}) => {
    <>
        <Navbar/>   
            <StyledHomeLayout>
                {children}
            </StyledHomeLayout>
        <Footer/>
    </>
}

export { HomeLayout }