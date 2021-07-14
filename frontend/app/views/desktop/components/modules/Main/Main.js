import styled from 'styled-components'
import { Center, Left, Right, Top } from './Sections'
import { Navigation, Links, Updates, MenuComponent } from '../../elements'
import Image from 'next/Image'
import { GlobalContext } from '../../../../../contexts/GlobalContext'
import { useContext } from 'react'

const MainContainer = styled.div`
    width:100%;
    height:100vh;
    display: grid;
    grid-template-columns:  12% 76% 12%;
    grid-template-rows: ${props=> props.greetings ? "300px 1fr 300px" : "1fr"};
    background-image: linear-gradient(to bottom, #FFF065, white);
    transition: 2s ease;
    transition: all 2s ease;
`
const CenterGridItem = styled.div`
    grid-column-start: 2;    
    grid-column-end: 3;
    grid-row-start: ${props=> props.greetings ? "1" : "1"};
    grid-row-end: 4;
    z-index: ${props=> props.greetings ? "2" : "0"};
    transition: all 2s ease;
    // margin-top: 200px;
`
const CenterBackgroundColor = styled.div`
    display: block;
    position: absolute;
    background-color: black;
    grid-row-start: 1; 
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 4;
    width:100%;
    height: ${props=> props.greetings ? "calc(100% - 150px)" : "400px"};
    transition: all 1s ease;
    // opacity: ${props=> props.greetings ? "1" : "0"};
    min-height: ${props=> props.greetings ? "400px" : "0px"};
`
const LeftMenuGrid = styled.div`
    position: sticky;
    left: 0;
    width: 100%;
    display: grid;
    grid-template-rows: 33% 1fr 1fr;
    height: 100%;
    z-index: 1;
`
const RightMenuGrid = styled.div
`
    right: 0;
    display: grid;
    grid-template-rows: 33% 1fr 1fr;
    width: 100%;
    height: 100%;
    z-index: 10;
    color: white;
`
const RightMenuGridItem = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    height: 100vh;
    width: 100%;
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


const BackgroundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`
const GreetingsNav = styled.div`
    font-family: 'Bebas Neue';
    font-size: 50px;

`
export function Main(){
    const [ state, dispatch ] = useContext(GlobalContext)

    const greetings = state.greetings

    return (
        <>
        <BackgroundContainer>
            <CenterBackgroundColor greetings={greetings}/>
        </BackgroundContainer>
        <MainContainer greetings={greetings}>
            <LeftMenuGridItem>
                <LeftMenuGrid>
                    <TopItem>
                        {
                            greetings ? <GreetingsNav>LUCASRAZA.COM</GreetingsNav> :  <Navigation/>
                        }
                        
                    </TopItem>
                    <CenterItem >
                        <MenuComponent title="Links">
                        </MenuComponent>
                    </CenterItem>
                </LeftMenuGrid>
            </LeftMenuGridItem>
            <CenterGridItem greetings={greetings}>
                <Center/>
            </CenterGridItem>
            <RightMenuGridItem>
                <RightMenuGrid>
                    <CenterItem>
                        <MenuComponent title="Updates"></MenuComponent>
                    </CenterItem>
                </RightMenuGrid>
            </RightMenuGridItem>
        </MainContainer>
        </>
    )
}


