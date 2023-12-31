import React, { useContext } from "react";
import Styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import DatasetIcon from "@mui/icons-material/Dataset";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import InsightsIcon from "@mui/icons-material/Insights";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Mobile } from "../responsive";
import { ContextProvider } from "../App";

const Container = Styled.div`
flex:1;
height:calc(100vh - 60px);
position:sticky;
top:60px;
overflow:scroll;
&::-webkit-scrollbar{
  display:none;
};
background-color:white;
color:black;
${Mobile({ maxWidth: "60px", display: (props) => props.sidebar && "none" })};
background-color:${(props) => props.colorTheme.backPri};
color:${(props) => props.colorTheme.fontPri};
`;

const Wrapper = Styled.div`
display:flex;
align-items:flex-start;
justify-content:center;
padding:10px;
${Mobile({ padding: "10px 2px" })};
`;

const Table = Styled.table`
border:none;
width:90%;`;
const Tr = Styled.tr`
margin-top:5px;

padding-top:10px; 
padding-bottom:10px; 
display:flex;
align-items:center;
border-radius:10px;
border:${(props) =>
  props.location === props.name ? "solid 1px lightgray" : "none"};
justify-content:center;
&:hover{
  
  cursor:pointer;
  /* background-color:lightgrey; */
  background-color:${(props) => props.colorTheme.backSec};

}`;
const TdIcon1 = Styled.td`
display:flex;
align-items:center;
justify-content:center;
flex:1;`;

const TdText = Styled.td`
padding-left:10px;
${Mobile({ display: "none" })};

flex:3;`;
const TdIcon2 = Styled.td`
${Mobile({ display: "none" })};
flex:1;`;
const Heading = Styled.span`
font-size:18px;
font-weight:bold;`;

const Sidebar = () => {
  const { colorTheme } = useContext(ContextProvider);
  const sidebar = useSelector((state) => state.sidebar.toggle);

  const navigate = useNavigate();
  const IconStyle = {
    height: "30px",
    width: "30px",
  };
  let Location = useLocation();
  Location = Location.pathname.split("/")[1];

  const handleClick = (path) => {
    navigate("/" + path);
  };
  return (
    <Container className="child" sidebar={sidebar} colorTheme={colorTheme}>
      <Wrapper>
        <Table>
          <Tr
            colorTheme={colorTheme}
            location={Location}
            name={"dashboard"}
            onClick={() => {
              handleClick("dashboard");
            }}
          >
            <TdIcon1>
              <HomeIcon style={IconStyle} />
            </TdIcon1>
            <TdText>
              <Heading>Dashboard</Heading>
            </TdText>
            <TdIcon2></TdIcon2>
          </Tr>

          <Tr
            colorTheme={colorTheme}
            location={Location}
            name={"inbox"}
            onClick={() => {
              handleClick("inbox");
            }}
          >
            <TdIcon1>
              <MailIcon style={IconStyle} />
            </TdIcon1>
            <TdText>
              <Heading>Inbox</Heading>
            </TdText>
            <TdIcon2></TdIcon2>
          </Tr>

          <Tr
            colorTheme={colorTheme}
            location={Location}
            name={"chats"}
            onClick={() => {
              handleClick("chats");
            }}
          >
            <TdIcon1>
              <ChatBubbleIcon style={IconStyle} />
            </TdIcon1>
            <TdText>
              <Heading>Chats</Heading>
            </TdText>
            <TdIcon2></TdIcon2>
          </Tr>
          <Tr
            colorTheme={colorTheme}
            location={Location}
            name={"knowledgebase"}
            onClick={() => {
              handleClick("knowledgebase");
            }}
          >
            <TdIcon1>
              <DatasetIcon style={IconStyle} />
            </TdIcon1>
            <TdText>
              <Heading>Knowledge Base</Heading>
            </TdText>
            <TdIcon2></TdIcon2>
          </Tr>
          <Tr
            colorTheme={colorTheme}
            location={Location}
            name={"leads"}
            onClick={() => {
              handleClick("leads");
            }}
          >
            <TdIcon1>
              <InsightsIcon style={IconStyle} />
            </TdIcon1>
            <TdText>
              <Heading>Leads</Heading>
            </TdText>
            <TdIcon2></TdIcon2>
          </Tr>
          <Tr
            colorTheme={colorTheme}
            location={Location}
            name={"settings"}
            onClick={() => {
              handleClick("settings");
            }}
          >
            <TdIcon1>
              <SettingsIcon style={IconStyle} />
            </TdIcon1>
            <TdText>
              <Heading>Settings</Heading>
            </TdText>
            <TdIcon2></TdIcon2>
          </Tr>
        </Table>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
