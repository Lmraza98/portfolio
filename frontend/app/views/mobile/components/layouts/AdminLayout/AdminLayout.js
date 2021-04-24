import { Navbar, Footer } from '../../modules'
import styled from 'styled-components'

const StyledAdminLayout = styled.div`
    display: flex;
    flex-direction: column;
`
const AdminLayout = ({children}) => {
    <>
        <Navbar/>   
            <StyledAdminLayout>
                {children}
            </StyledAdminLayout>
        <Footer/>
    </>
}

export { AdminLayout }