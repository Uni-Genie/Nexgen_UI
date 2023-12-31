import React, { useContext } from "react";
import Styled from "styled-components";
import { ContextProvider } from "../App";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import WarningIcon from "@mui/icons-material/Warning";

const Container = Styled.div`
position:absolute;
bottom:50px;
right:0px;
height:100px;
overflow:hidden;

width:500px;
display:flex;
align-items:center;
justify-content:center;
`;
const Wrapper = Styled.div`

border-radius:5px;
width:380px;
background-color:${(props) => (props.theme === "light" ? "white" : "black")};
color:${(props) => (props.theme === "dark" ? "white" : "black")};
margin-left:100px;
height:80px;
display:flex;
align-items:center;
justify-content:center;
transform:translateX(400px);
transition:all 0.8s ease-in-out;
`;
const ComponentWrapper = Styled.div`
flex:${(props) => props.width};
display:flex;
align-items:center;
justify-content:center;
`;
const Span = Styled.span`
font-size:20px;
font-weight:bolder;`;
const Toast = (props) => {
  const { alert, removeNotification, theme } = useContext(ContextProvider);

  const IconStyle = {
    height: "35px",
    width: "35px",
    color: alert.type === "success" ? "green" : "red",
  };
  const CloseStyle = {
    height: "25px",
    width: "25px",
    color: theme === "light" ? "black" : "white",
    cursor: "pointer",
  };

  return (
    <Container>
      <Wrapper theme={theme} style={{ transform: alert.transform }} id="wrap">
        <ComponentWrapper width="1">
          {alert.type === "success" ? (
            <CheckCircleIcon style={IconStyle} />
          ) : (
            <WarningIcon style={IconStyle} />
          )}
        </ComponentWrapper>
        <ComponentWrapper width="4">
          <Span>{alert.message}</Span>
        </ComponentWrapper>
        <ComponentWrapper width="1">
          <CloseRoundedIcon
            onClick={() => removeNotification()}
            style={CloseStyle}
          />
        </ComponentWrapper>
      </Wrapper>
    </Container>
  );
};

export default Toast;
