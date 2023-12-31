import React, { useContext } from "react";
import Styled from "styled-components";
import { useLocation } from "react-router-dom";
import EmailInterface from "./inbox/EmailInterface";
import Widgets from "./dashboard/Widgets";
import Chat from "./chats/Chats";
import { ContextProvider } from "../App";
import KnowledgeBase from "./KnowledgeBase/KnowledgeBase";
import Leads from "./leads/Leads";

const Container = Styled.div`
flex:3.5;
top:60px;
position:sticky;
overflow:scroll;
background-color:${(props) => props.colorTheme.backSec};
height:calc(100vh - 60px);
&::-webkit-scrollbar{
  display:none;
}
`;

const Content = () => {
  let Location = useLocation();
  Location = Location.pathname.split("/");
  const { colorTheme } = useContext(ContextProvider);
  let page = Location[1];

  return (
    <Container colorTheme={colorTheme}>
      {page === "home" && <h1>hello world</h1>}
      {page === "inbox" && <EmailInterface />}
      {page === "dashboard" && <Widgets />}
      {page === "chats" && <Chat />}
      {page === "knowledgebase" && <KnowledgeBase />}
      {page === "leads" && <Leads />}
    </Container>
  );
};

export default Content;
