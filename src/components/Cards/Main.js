import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useSpring, animated, config } from "react-spring";

const Main_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin: 10px;
  z-index: 20;
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

const ProfileCircle_mobile = styled.div`
  height: 100px;
  width: 100px;
  clip-path: circle(48px at center);
`
const ProfileCircle = styled.div`
  height: 250px;
  width: 250px;
  clip-path: circle(120px at center);
`

const StyledImage = styled(Image)`
  position: absolute;
`;

const Main = (props) => {
  const transitions = useSpring({
    config: { tension: 70 },
    from: { transform: "translateX(-120%)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    delay: 0,
  });

  return (
    <Main_container>
      
        {props.isMobile ? 
        <></> :
          <ProfileCircle>
          <StyledImage
          src="/static/profile.jpg"
          alt="Professional Headshot of Me"
          width={250}
          height={250}
          layout=""
          ></StyledImage>
          </ProfileCircle>}
          <Greeting_container>
          <Greeting style={transitions}>
            <Span style="color: red">Hello</Span>, I'm Lucas
          </Greeting>
        </Greeting_container>
      
    </Main_container>
  );
};

export default Main;
