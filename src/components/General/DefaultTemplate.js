import React, { useState, useEffect, useContext } from "react";
import Styled from "style-components";
import { ContextProvider } from "../App";
const Container = Styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
background-color:${(props) => props.bgColor};
`;
const DefaultTemplate = () => {
  const { colorTheme, theme } = useContext(ContextProvider);

  const { backPri, backSec, fontPri } = colorTheme;

  return <Container bgColor={backPri}>DefaultTemplate</Container>;
};

export default DefaultTemplate;
