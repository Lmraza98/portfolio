import React from 'react'
import styled from 'styled-components'
import Image from 'next/Image'
import { GreetingsLine, ScrollElement, Updates, Badge } from '../../elements'
<style>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Orbitron&display=swap');
</style>

const GreetingsContainer = styled.div`
  display: grid;
  grid-template-rows: 125px 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 2em;
  height: 100%;
`

const PageGridItem = styled.div`
  grid-row-start:2;
  grid-row-end 3;
  grid-column-start:  1;
  grid-column-end: 4;
  width: calc(100 - 5px);
  background-color: white;
  border: 7px solid black;
  border-right: 7px solid black;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  padding-left: 15em;
  padding-right: 15em;
`
const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 10% 20%;
  // width: 100%;
  // height: 100;

`

const InfoGridItem = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: -60px;

`

const Title = styled.div`
// size: 28px;
  font-size: 40px;
  // align-text: left;
  // text-align: left;
  font-family: "${ props => props.theme.navFont}";

`

const DownArrow = styled.div`
width: 0; 
height: 0; 
border-left: 15px solid transparent;
border-right: 15px solid transparent;
border-top: 25px solid black;
align-self: center;
justify-self: end;
`
const ProfileGridItem = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
  align-self: start;
  justify-self: right;
  margin-left: 8em;
  // border: 5px solid black;
  // border-radius: 50%;
  margin-bottom: 75px;
  
`
const ProfileContainer = styled.div`
position: inherit;
display: flex;
width: 240px;
height: 240px;
border: 7px solid black;
align-items: center;
justify-content: center;
border-radius: 50%;
// margin-left: 15%;
`
const Name = styled.div`
    font-size: 30px;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 4;
    align-self: end;
    margin-bottom: -20px; 
    padding-left: .1em;
    font-family: "${ props => props.theme.navFont}";
   font-size: 100px;
    
`
const NameContainer = styled.div`
display: flex;
flex-direction: column;
align-content: end;
justify-items: end;
height: 100%;

`
const Description = styled.div`
  font-family: comfortaa;
`
const BadgesGridItem = styled.div`
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 4;
`
const BadgesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  // padding: 5em;
  // background-color: black;
  height: 100%;
  width: 100%;
  color: black;
  align-items: baseline;
`
const ReachOutGridItem = styled.div`
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
  height: 300px;
`
const Question = styled.div`
  font-size: 30px;
  // height: 100%;
`
const ReachOut = styled.div`
// height: 100%;


`


export const Greetings = ({children, name}) => {
  
    return (
    // <ScrollElement name="experience">
      <GreetingsContainer>
      
      <ProfileGridItem>
<Image className="profile" layout="fill" src="/greetings/main_profile.jpg"></Image>
  <style jsx global>
    {`
      .profile { 
        border-radius: 50%;
        // display: inherit!important;
        // width: 100%!important;
        // border: 5px solid black !important;
      }
    `
    }
  </style>
  <ProfileContainer> </ProfileContainer>
  
</ProfileGridItem>

<Name><NameContainer>LUCAS RAZA</NameContainer></Name>
        <PageGridItem>
          <Page>
            <InfoGridItem>
              <InfoContainer><Title>Software Engineer</Title>
              <Description>I'm a freelance developer who specializes in creating resonsive websive
                that pair with content management systemss
              </Description></InfoContainer>
            </InfoGridItem>
            <BadgesGridItem>
              <BadgesContainer>
                <Badge width={"200px"} height={"100px"} title="Front-End" desc={"focus on writing clean, efficient code for a great use-experience"} src={"/greetings/frontend.png"}/>
                <Badge width={"90px"} height={"100px"} title="Security" desc={"focus on following best practices to ensure data and web security"} src={"/greetings/security.png"}/>
                <Badge width={"100px"} height={"100px"} title="Back-End" desc={"focus on structuring server-side information to best serve use case"} src={"/greetings/backend.png"}/>
              </BadgesContainer>
            </BadgesGridItem>
            <ReachOutGridItem>
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
          </Page>
        </PageGridItem>
      </GreetingsContainer>
    // {/* </ScrollElement> */}
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
