import React from "react";
import Styled from "styled-components";
const Heading = Styled.span`
margin:0px;
color:${(props) => props.ftColor};
font-size:${(props) => (props.size ? props.size : "1.5rem")};
font-weight:${(props) => (props.weight ? props.weight : "normal")};
`;
const Text = ({ ftColor, ftSize, val, ftWeight }) => {
  //   console.log(ftSize);
  return (
    <Heading ftColor={ftColor} size={ftSize} weight={ftWeight}>
      <span style={{color:"blue"}}>note</span>Share &nbsp;
    </Heading>
  );
};

export default Text;
