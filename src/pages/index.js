import Image from 'next/image'
import styled from 'styled-components'
import React from 'react'
import Navbar from '../components/Navbar/Navbar.js'
import MainContent from '../components/MainContent/MainContent.js'

const Navbar_item = styled(Navbar)`
  display: block;
  height: 100%;
  position:fixed;
  
`;
const Background = styled(Image)`
  z-index: 10;
  opacity: 15%;
  position: relative;
  bottom: 0;
`
const Portfolio_container = styled.div
`
  position: fixed;
  height: 100%;
  width: 100%;
  display: inline-block;
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
        <MainContent></MainContent>
      </Portfolio_container>
    </Container>
  )
}
export default Home

 