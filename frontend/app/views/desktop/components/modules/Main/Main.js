import styled from 'styled-components'
import { Center, Left, Right, Top } from './Sections'

const MainGridContainer = styled.div`
    width:100%;
    height:100%;
    display: grid;
    grid-template-columns: 20% 65% 15%;
    grid-template-rows: 5% 85% 10%;
`
const LeftGridItem = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
`
const CenterGridItem = styled.div`
    grid-column-start: 2;
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
const RightGridItem = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1; 
    grid-row-end: 4;
    background-color: rgba(255, 255, 255, .15);  
    color: ${props => props.theme.textColor};
    font-family: ${props => props.theme.navFont};
    text-align: center;
    font-size: 18px;
`
export function Main(){
    return (
        <MainGridContainer>
            <TopGridItem>
                <Top/>
            </TopGridItem>
            <RightGridItem>
                <Right/>
            </RightGridItem>
            <CenterGridItem>
                <Center/>
            </CenterGridItem>
            <LeftGridItem>
                <Left/>
            </LeftGridItem>
            
        </MainGridContainer>
    )
}


