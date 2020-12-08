import Head from 'next/head'
import styled from 'styled-components'
// import '../styles/globals.scss'
import IconWheel from '../components/IconWheel/IconWheel.js'
import Footer from '../components/Footer/Footer.js'
import Navbar from '../components/Nabvar/Navbar.js'
import Canvas from '../components/Canvas/Canvas.js'
import MainContent from '../components/MainContent/MainContent.js'


const Portfolio_container = styled.div
`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15% 80% 5%;
`;
const Navbar_item = styled(Navbar)`
  
  //align-content: center;
  height: 100%;
  position:fixed;
  
`;
const IconWheel_item = styled(IconWheel)`
  
  z-index: 10;
  position: relative;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
`;
const Footer_item = styled(Footer)`
  grid-row: 3 / span 1;
  grid-column:3;
  z-index: 100;
  height: 50px;
  position: fixed;
`;
const StyledCanvas = styled(Canvas)`
height: 100%;
// width: 100%;
z-index: 1;
top:0;
left:0;
grid-row: 1 / span 1;
  grid-column:1;
`;
const Nav_container = styled.div`
  
  // position: relative;
  
  width: 100%;
  border-bottom: 2px solid black;
  
`;
const MainContent_container = styled(MainContent)`
  height: 100%;
  padding-left: 15%;
  padding-right: 15%;
  grid-row: 2 / span 1;
  grid-column:2;
  z-index:100;
  position: inherit;
`;
export default function Home() {
  return (
    <Portfolio_container>
      
        <Navbar_item />
        <MainContent></MainContent>
      {/* <StyledCanvas>
      {/* <MainContent_container/> */}
      {/* </StyledCanvas> */} 
      <Footer_item>
      <IconWheel_item/>
      </Footer_item>
    </Portfolio_container>
  )
}
