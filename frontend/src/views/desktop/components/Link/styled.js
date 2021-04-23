import styled from "styled-components";
export default StyledLink = styled.a`
    // color: white;
    color: ${(props) => (props.active ? "#0AD1A1" : "#CACACA")};
    font-family: "Source Code Pro", monospace;
    font-size: 25px;
    text-decoration: none;
    // margin-top 20px;
    font-size: 1em;
`;
