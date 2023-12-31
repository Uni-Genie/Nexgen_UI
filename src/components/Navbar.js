import React, { useState, useContext } from "react";
import Styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useNavigate } from "react-router-dom";
import { Mobile } from "../responsive";
import { toggleSidebar } from "../redux/sideReducer";
import { useSelector, useDispatch } from "react-redux";
import { toggleAccountBar } from "../redux/accountReducer";
import { ContextProvider } from "../App";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Container = Styled.div`
display:flex;
align-items:center;
/* background-color:white; */
position:sticky;
z-index:2;
top:0px;
justify-content:center;
height:60px;
padding-left:20px;
padding-right:20px;
background-color:${(props) => props.colorTheme.backPri};
color:${(props) => props.colorTheme.fontPri};
/* border-bottom:1px solid lightgrey; */
`;

const Wrapper = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
`;

const Left = Styled.div`
flex:1;
display:flex;
align-items:center;;
justify-content:flex-start;
`;

const IconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

const TitleContainer = Styled.div`
padding:0px 10px 0px 10px;
`;

const Title = Styled.h1`
margin: 0px auto 0px auto;
cursor:pointer;
font-size:32px;
${Mobile({ fontSize: "28px" })};`;

const Right = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;`;

const UserContainer = Styled.div`
display:flex;
align-items:center;
height:40px;
width:40px;
border-radius:50%;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
margin-right:10px;
`;

const Img = Styled.img`
height:35px;
width:35px;
border-radius:50%;
object-fit:cover;
`;
const Span = Styled.span`
font-size:32px;
${Mobile({ display: "none" })};
color:#0081B4;`;
const Navbar = () => {
  const dispatch = useDispatch();
  const { toggleTheme, colorTheme, theme } = useContext(ContextProvider);

  const IconStyle = {
    height: "35px",
    width: "35px",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <Container theme={theme} colorTheme={colorTheme}>
      <Wrapper>
        <Left>
          <IconContainer>
            <MenuRoundedIcon
              style={IconStyle}
              onClick={() => dispatch(toggleSidebar())}
            />
          </IconContainer>
          <TitleContainer>
            <Title>
              NexGen.
              <Span>Ai</Span>
            </Title>
          </TitleContainer>
        </Left>

        <Right>
          <UserContainer clicked={true}>
            {theme === "light" ? (
              <DarkModeIcon
                style={IconStyle}
                onClick={() => {
                  toggleTheme();
                }}
              />
            ) : (
              <LightModeIcon
                style={IconStyle}
                onClick={() => {
                  toggleTheme();
                }}
              />
            )}
          </UserContainer>
          <UserContainer>
            <AccountCircleIcon style={IconStyle} />
          </UserContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
