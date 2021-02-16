import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Main_container = styled.div`
  // display: inherit;
  margin: 10px;
  z-index: 20;
  // height: inherit;
  // width: 100%;
  // padding: 10px;
  // flex-grow: 1;
`;

const ProfileCircle = styled.div`
  height: 100px;
  width: 100px;
  clip-path: circle(48px at center);
`

const StyledImage = styled(Image)`
  // height: 100%;
  // width: 100%;
  // display: inherit;
  position: absolute;
`;

const Main = (props) => {
  return (
    <Main_container>
      <ProfileCircle>
        <StyledImage
          src="/static/profile.jpg"
          alt="Professional Headshot of Me"
          width={250}
          height={250}
          layout=""
        ></StyledImage>
      </ProfileCircle>
    </Main_container>
  );
};

export default Main;
