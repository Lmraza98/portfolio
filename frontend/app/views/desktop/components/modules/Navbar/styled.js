import styled from "styled-components";
const Navbar_container = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  //top: 0;
  z-index: 5;
  padding-top: 1rem
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { Navbar_container, Nav }