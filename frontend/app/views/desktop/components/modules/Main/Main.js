import styled from 'styled-components'
import { Center, Left, Right, Top as Navigation } from './Sections'

const MainContainer = styled.div`
    width:100%;
    height:100vh;
    display: grid;
    grid-template-columns: 20% 65% 15%;
    grid-template-rows: 5% 85% 10%;
`
const CenterGridItem = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2; 
    grid-row-end: 4;
`

const TopGridItem = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1; 
    grid-row-end: 2;
    background-color: transparent;
    // backdrop-filter: blur(5px);
    // border-left: 1px solid ${props => props.theme.textColor};
`
export function Main(){
    return (
        <MainContainer>
            <Navigation/>
            <CenterGridItem>
                <Center/>
            </CenterGridItem>
        </MainContainer>
    )
}


