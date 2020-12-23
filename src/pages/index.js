import Image from 'next/image'
import styled from 'styled-components'
import React from 'react'
import Footer from '../components/Footer/Footer.js'
import Navbar from '../components/Navbar/Navbar.js'
import MainContent from '../components/MainContent/MainContent.js'
import { usePageState } from '../page-context.js'

const MainContent_container = styled(MainContent)`
  position: relative;
  
  height: 100%;
`
const Navbar_item = styled(Navbar)`
  height: 100%;
  position:fixed;
`;
const Footer_item = styled(Footer)`
  grid-row: 3 / span 1;
  grid-column:3;
  z-index: 100;
  position: fixed;
  bottom: 0;
  z-index: 20;
`;
const Background = styled(Image)`
  z-index: 10;
  opacity: 50%;
  position: relative;
  bottom: 0;
`
const Portfolio_container = styled.div
`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: 2s;
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
`
const Background_container = styled.div`
  bottom: 0; 
  position: absolute;
`
const Home = () => {
  return (
    <Container>
      <Background_container>
        <Background width="1954" height="602" src="/static/background.png" alt="Boston silhouette"/>
      </Background_container>
      <Portfolio_container>
        <Navbar_item />
        <MainContent_container>
          <MainContent></MainContent>
        </MainContent_container>
      </Portfolio_container>
    </Container>
  )
}
export default Home

 