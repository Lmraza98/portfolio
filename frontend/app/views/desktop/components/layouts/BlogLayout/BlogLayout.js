import { Navbar, Footer } from '../../modules'
import styled from 'styled-components'

const StyledBlogLayout = styled.div`
    display: flex;
    flex-direction: column;
`
function BlogLayout({ children }){
    return (
        <>
            <Navbar/>   
                <StyledBlogLayout>
                    {children}
                </StyledBlogLayout>
            <Footer/>
        </>
    )
    
}

export { BlogLayout }