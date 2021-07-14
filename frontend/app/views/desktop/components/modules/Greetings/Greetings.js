import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/Image'
import { GreetingsLine, ScrollElement, Updates, Badge } from '../../elements'
import { GlobalContext } from '../../../../../contexts/GlobalContext'
import { useSpring, animated } from 'react-spring'
<style>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Orbitron&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
</style>
const GreetingsContainer = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  z-index: ${props=> props.greetings ? "0" : "5"};
  transition: all 2s ease;
  width: 100%;
  padding-top: 50px;
`
const PageGridItem = styled.div`
  grid-row-start:  2;
  grid-row-end 3;
  grid-column-start:  1;
  grid-column-end: 5;
  
  
  height: ${props => props.banner ? "100%" : "calc(100%)"};
  width: ${props => props.banner ? '100%' : 'calc(100% - 14px)'};
  transition-delay: 1s;
  transition: height 3s ease-in;

`
const PageBackground = styled.div`
  // position: absolute;
  display: inherit;
  // display: ${props => props.banner ? 'none' : 'block'};
  z-index: -5;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border: ${props => props.banner ? 'none' : '7px solid black'};
  background-color: ${props => props.banner ? 'transparent' : 'white'};
  height: ${props => props.banner ? '0px' : '100vh'};
  width: ${props => props.banner ? '0px' : 'calc(100% - 14px)'};
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 4;

  transition: all 2s ease;
`

const MainPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  height: ${props => props.banner ? "100%" : "calc(100%)"};
  transition-delay: 250ms;
  transition: all 5s ease;
`
const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: left;
  transition: all 5s ease;
  width: ${props => props.banner ? "500px" : "calc(100% - 14px)"};
  height: ${props => props.banner ? "500px" : "calc(100%)"};
`

const InfoGridItem = styled(animated.div)`
  // position: relative;
  // top: 50%;
  // transform: translateY(-50%);
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  height: 100%;
  width: 100%;
  color: ${props => props.banner ? 'white' : 'black'};
  // transform: ${ props => props.banner ? 'translateY(calc(50vh - 30vh)) translateX(13vw)' : 'translateX(-13vw) translateY(-4vh)'};
  transition-delay: 10s;
  transition-property: transform;
  text-align: center;
  transition: transform 2s ease;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items:center;
  transition: all 2s ease;
  margin-top: ${ props => props.banner ? 'center' : '-55px'};
  transform: ${ props => props.banner ? 'translateY(50vh)' : 'none'};
  z-index: 0;
  
`
const Card = styled.div`
width: 30%;
// height: 100%;

`
const Title = styled.div`
  font-size: 40px;
  font-family: "${ props => props.theme.navFont}";
  
    border-radius: 1em;
    height: 50px;
    // mix-blend-mode: difference;
    color:  ${ props => props.banner ? 'white' : 'black'};
`
const DownArrow = styled(animated.div)`
// display:  ${ props => props.banner ? 'block' : 'none'};
position: relative;
height: 100%;
//top:0;
// bottom: 0;
align-self: center;
width: 0; 
height: 0; 
margin-top: 2em;
border-left: 30px solid transparent;
border-right: 30px solid transparent;
border-top: 50px solid ${ props => props.banner ? 'black' : 'white'};
align-self: center;
justify-self: end;
transform: ${ props => props.greetings ? 'rotate(360deg)' : 'rotate(360deg)'};
justify-self: bottom;
  
`
const ProfileGridItem = styled.div`
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 3;
  margin-left: 25px;
  margin-right: 25px;
  display: block;
  position: ${ props => props.greetings ? 'absolute' : 'inherit'};;
  width: 100%
  top: 0;
  transform: ${ props => props.banner ? 'translateY(calc(-10rem)) ' : ''};
  transition: all 2s ease;
  height: 100%;
`
const Name = styled(animated.div)`
  font-family: ${ props => props.theme.navFont};
  width: 100%;
  line-height: .5;
  font-size: 75px;
  
  margin-bottom: 20px;
  // height: ${ props => props.banner ? '100px' : '500px'};
 
  transition: all 2s ease;
  border-radius: 1em;
  // height: 50px;
  // width: 75%;
  height: 100%;
`
const NameContainer = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  border-radius: 25px;
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(1000px);
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.5);  
  }

`
const Description = styled.div`
font-family: 'Comfortaa', cursive;
  // border: 7px solid black;
  
  // padding-left: 20%;
  // padding-right: 20%;
  width: 500px;
  border-radius: 1em;
  padding: 1em;
  -webkit-backdrop-filter: ${props => props.banner ? "blur(1px)":"blur(1px)" };
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: ${props => props.banner ? "blur(10px)": "none" };
      backdrop-filter: ${props => props.banner ? "blur(5px)": "none"};
      background-color: ${props => props.banner ? "rgba(255, 255, 255, 0.5)" :"transparent"  };
    }
`
const BadgesGridItem = styled.div`
width: ${props => props.banner ? "0px" : "100%"};
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 4;
  opacity: ${props => props.banner ? "0" : "1"};
  transition: ${props => props.banner ? "all .5s ease" : "all 2s ease"};
`
const BadgesContainer = styled.div`
  display: ${props => props.banner ? "flex" : "flex"};
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: black;
  align-items: center;
  opacity: ${props => props.banner ? "0" : "1"};
  transition: ${props => props.banner ? "all 5s ease" : "all 5s ease"};
`
const ReachOutGridItem = styled.div`
  display: ${props => props.banner ? "none" : ""};
  grid-row-start: 4;
  grid-row-end: 5;
  grid-column-start: 1;
  grid-column-end: 4;
  height: 100%;
`
const ReachOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`
const Question = styled.div`
  font-size: 30px;
`
const ReachOut = styled.div`
  height: 100%;
`
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  align-items: ${props => props.banner ? "center" : "center"};
  height: 100%;
  transform: ${props => props.banner ? "" : "translateX(-300px) translateY(-50%)"};
  transition: all 2s ease;
  z-index: 1;
  padding-top: 14px;
`
const ImageSize = styled.div`
  height: ${props => props.banner ? "450px" : "200px"};
  width: ${props => props.banner ? "450px" : "200px"};
  object-fit: contain;
  
  position: relative;
  transition: all .5s ease-in;
  z-index: ${props => props.banner ? "1" : "2"};
`
const ImageBorder = styled.div`
  height: 100%;
  width: 100%;
  transition: all 2s ease;
  // border: 7px solid white;
  border-radius: 50%;
`
const ArrowContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;

width: 100%;
align-items: center;
// background-color: black;

`
const DescriptionContainer = styled.div`

display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: fit-content;
  
  width: 100%;
align-self: center;
justify-self: center;


`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  // mix-blend-mode: difference;

`
const ImageBackground = styled(animated.div)`
  display: block;
  position: fixed;
  width: ${props => props.banner ? "400px" : "225px"};
  height: ${props => props.banner ? "400px" : "225px"};
  border:${props => props.banner ? "7px solid white" : "7px solid black"};
  border-radius: 50%;
  z-index: ${props => props.banner ? "1" : "1"};
  transition: all 2s ease;
  // background-color: ${props => props.banner ? "transparent" : "white"};
  // margin-top: 25px;
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      // -webkit-backdrop-filter: blur(10px);
      backdrop-filter: ${props => props.banner ? "transparent" : "rblur(5px);" };
      background-color: ${props => props.banner ? "transparent" : "#FFF8B9" };
    }
  

`
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x /  100}%,${y /  100}%,0)`
const trans2 = (x, y) => `translate3d(${x /  50}%,${y /  50}%,0)`
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`
export const Greetings = ({children, name, banner}) => {
    const [ state, dispatch ] = useContext(GlobalContext)
    const [ square, setSquare ] = useState(true)
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 0, tension: 1, friction: 1 } }))
    const onClick = (e) => {
      e.preventDefault()
      dispatch({type: 'SET_GREETINGS', payload: true})
    }

    

    return (
      <GreetingsContainer  banner={banner}>
        <PageBackground banner={banner}></PageBackground>
        <PageGridItem onMouseMove={({ clientX: x, clientY: y }) => {set({ xy: calc(x, y) })}}  banner={banner}>
          <MainPageContainer  >
          
            <MainPageGrid banner={banner}>
            <ProfileGridItem  banner={banner}>
            
              <ImageContainer banner={banner}>
              
                <ImageSize style={{ transform: props.xy.to(trans1) }} square={square} banner={banner}>
                  
                <Image  layout="fill" objectFit="cover"  className="profile" src="/greetings/main_profile.jpg"/>
                
                </ImageSize>
                {/* <animated.div > */}
                <ImageBackground  style={banner ? { transform: props.xy.to(trans1) } : {}} banner={banner}></ImageBackground>
        
                {/* </animated.div> */}
                
              </ImageContainer>
              
              </ProfileGridItem>
     
              <InfoGridItem banner={banner}>
              
                <InfoContainer banner={banner}>
                  <Card>
                  <NameContainer banner={banner}><Name  banner={banner}>LUCAS RAZA</Name></NameContainer>    <TitleContainer banner={banner}><Title banner={banner}>Software Engineer</Title></TitleContainer>
                  {
                    banner ?  <DescriptionContainer banner={banner}><Description banner={banner}>I'm a freelance developer who specializes in creating resonsive websive
                    that pair with content management systemss
                    <ArrowContainer><DownArrow  banner={banner} rotate={state.greetings} onClick={onClick}></DownArrow></ArrowContainer></Description></DescriptionContainer> : <></>
                  }
                  
                  {/* <ArrowContainer><DownArrow banner={banner} onClick={onClick}></DownArrow></ArrowContainer> */}
                  </Card>
                </InfoContainer>
                
              </InfoGridItem>
              {
                <><BadgesGridItem  banner={banner}>
                <BadgesContainer>
                  <Badge width={"200px"} height={"100px"} title="Front-End" desc={"focus on writing clean, efficient code for a great use-experience"} src={"/greetings/frontend.png"}/>
                  <Badge width={"90px"} height={"100px"} title="Security" desc={"focus on following best practices to ensure data and web security"} src={"/greetings/security.png"}/>
                  <Badge width={"100px"} height={"100px"} title="Back-End" desc={"focus on structuring server-side information to best serve use case"} src={"/greetings/backend.png"}/>
                </BadgesContainer>
              </BadgesGridItem>
              <ReachOutGridItem  banner={banner}>
                <ReachOutContainer>
                  <Question>
                    Interested in working together?
                  </Question>
                  <ReachOut>
                    Reach Out
                  </ReachOut>
                  <DownArrow></DownArrow>
                </ReachOutContainer>
              </ReachOutGridItem>
              
              </>
                
             }
             
            </MainPageGrid>
            
            <style banner={banner}>
                {`
                  .profile { 
                    transition: 1s ease-in;
                    border-radius: 50%;
                    height: 100px;
                    width: 100px;
                    min-width:0;
                    border: 5px solid black;
                    
                    
                    
                  }
                `
                }
              </style>
              
          </MainPageContainer>
        </PageGridItem>
      </GreetingsContainer>
    )
}

export async function getStaticProps() {
    const apolloClient = getApolloClient();
  
    const data = await apolloClient.query({
      query: gql`
        {
          generalSettings {
            title
            description
          }
          posts(first: 10000) {
            edges {
              node {
                id
                excerpt
                title
                slug
              }
            }
          }
        }
      `,
    });
  
    const posts = data?.data.posts.edges.map(({ node }) => node).map(post => {
      return {
        ...post,
        path: `/posts/${post.slug}`
      }
    });
  
    const page = {
      ...data?.data.generalSettings
    }
  
    return {
      props: {
        page,
        posts
      }
    }
  }
