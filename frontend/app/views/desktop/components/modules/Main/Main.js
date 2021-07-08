import styled from 'styled-components'
import { Center, Left, Right, Top } from './Sections'
import { Navigation, Links, Updates, MenuComponent } from '../../elements'
import Image from 'next/Image'

const MainContainer = styled.div`
    width:100%;
    height:100vh;
    display: grid;
    grid-template-columns:  12% 76% 12%;
    background-image: linear-gradient(to bottom, #FFF065, white);
    // padding-top: 2em;
`
const CenterGridItem = styled.div`
    grid-column-start: 2;    
    grid-column-end: 3;
    // border-left: 7px solid black;
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
const LeftMenuGrid = styled.div`
    position: sticky;
    left: 0;
    // background-color: black;
    width: 100%;
    display: grid;
    grid-template-rows: 33% 1fr 1fr;
    height: 100%;

`
const RightMenuGrid = styled.div
`
// position: sticky;
    right: 0;
    
    display: grid;
    grid-template-rows: 33% 1fr 1fr;
    width: 100%;
    height: 100%;
`


const RightMenuGridItem = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    height: 100vh;
    width: 100%;
    // background-color: black;

`
const LeftMenuGridItem = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    height: 100vh;
    width: 100%;
`
const TopItem = styled.div
`
    grid-row-start: 1;
    grid-row-end: 2;
`
const CenterItem = styled.div`
    grid-row-start: 2;
    grid-row-end: 3;
    background-color: black;
    font-color: white;
    color: white;
    justify-content: center;
    align-content: center;
    align-items: center;
`


const NameGridItem = styled.div`
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 2;
grid-column-end: 3;
`

export function Main(){
    return (
        <MainContainer>
            {/* <Navigation/> */}
           
            <LeftMenuGridItem>
                <LeftMenuGrid>
                    <TopItem>
                        <Navigation/>
                    </TopItem>
                    <CenterItem>
                        <MenuComponent title="Links">
                        </MenuComponent>
                        
                    </CenterItem>
                </LeftMenuGrid>
            </LeftMenuGridItem>
            
            <CenterGridItem>
                <Center/>
            </CenterGridItem>
            <RightMenuGridItem>
            <RightMenuGrid>
                <CenterItem>
                <MenuComponent title="Updates">
                    
                </MenuComponent>
                    
                </CenterItem>
            </RightMenuGrid>
            </RightMenuGridItem>
            
        </MainContainer>
    )
}


