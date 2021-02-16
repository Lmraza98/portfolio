import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { usePageState } from "../../page-context.js";
import { About, Contact, Main } from "../Cards";
//Define spring

// import styles from './MainContent.css'
const Card_container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Main_container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 65%;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const MainCard = styled(Main)`
  // border: 1px;
  // position:
  // border-radius: 10px
  // width: 100%;
  // height: 100%;
  flex-grow: 1;
`;
const ContactCard = styled(Contact)`
  border-radius: 10px;
  border: 1px solid black;
  // flex-grow: 1;
  // height: 100%;
`;
const AboutCard = styled(About)`
  border-radius: 10px;
  border: 1px solid black;
  // flex-grow: 1;
`;
const GroupCards = styled.div`
    display: flex;
    flex-direction column;
    flex-wrap: nowrap;
    align-items: stretch;
    width: 75%;
    height: 100$;
    
    align-content: center;
    flex-grow: 1;

`;

const Greeting = styled(animated.div)`
  // width: 100%;
  // height: 100%;
  color: black;
  align-text: center;
  font-size: 20px;
  height: 1em;
`;
const Greeting_container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  height: 10%;
  color: black;
  align-text: center;

  margin-left: 5%;
  margin-right: 5%;
  z-index: 10;
  text-shadow: 1px 1px #999999;
`;
const Container = styled.div`
  display: block;
`;
const Span = styled.span`
  color: #0ad1a1;
  font-weight: 700;
  font-size: 25px;

`
const MainContent = ({ page }) => {
  //const [page, setPage] = useState(props.page);
  // const page = usePageState();
  // useEffect(() => {
  //     setPage(props.page)
  // });
  const transitions = useSpring({
    config: { tension: 70 },
    from: { transform: "translateX(-120%)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    delay: 0,
  });

  return (
    <Container>
      <Main_container>
        <Greeting_container>
          <Greeting page={page} style={transitions}>
            <Span style="color: red">Hello</Span>, I'm Lucas
          </Greeting>
        </Greeting_container>
        <Card_container>
          <MainCard />
          <GroupCards>
            <AboutCard />
            <ContactCard />
          </GroupCards>
        </Card_container>
      </Main_container>
    </Container>
  );
};
export default MainContent;
