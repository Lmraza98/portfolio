import Head from 'next/head'
import styled from 'styled-components'
// import '../styles/globals.scss'
import React from 'react'
import IconWheel from '../components/IconWheel/IconWheel.js'
import Footer from '../components/Footer/Footer.js'
import Navbar from '../components/Navbar/Navbar.js'
import Canvas from '../components/Canvas/Canvas.js'
import MainContent from '../components/MainContent/MainContent.js'
import { usePageState } from '../page-context.js'

const duration = 200;

const MainContent_container = styled(MainContent)`
position: fixed;
height: 100vh`
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
  height: 5%;
  // position: fixed;
  bottom: 0;
`;
const Portfolio_container = styled.div
`
  //position: inherit;
  display: flex;
  flex-direction: column;
  // grid-template-columns: 1fr;
  // grid-template-rows:${props}% ${getPage()[1]}% 5%;
  transition: 2s;
`;
const Home = () => {
  const { page }  = usePageState()
  let val;
  if( page === "home")
  {
    val = true;
  }
  else{
    val = false;
  }
  console.log("val: " + val)
  // const [inProp, setInProp] = useState(false);
  
    // console.log("page state: " + page)
  
    // if(page === "home")
    // {
    //   return [25, 70];
    // } else{
    //   return [5, 90];
    // }

  
  return (
    <Portfolio_container>
      <Navbar_item home={val}>
      {/* <CSSTransition in={inProp} timeout={200}>
        
      </CSSTransition> */}
        </Navbar_item>
      <MainContent_container>
        <MainContent></MainContent>
      </MainContent_container>
          
      <Footer_item>
      </Footer_item>
      
    </Portfolio_container>
  )
}
export default Home


