import React, { useContext } from "react";
import Styled from "styled-components";
import RefreshButtonIcon from "../General/RefreshButtonIcon";
import MailPage from "./MailPage";
import { ContextProvider } from "../../App";

const EmailInterface = () => {
  const { colorTheme } = useContext(ContextProvider);

  const EmailContainer = Styled.div`
  /* padding:10px 20px; */
  `;
  const TopContainer = Styled.div`
  padding:0px 20px;
  display:flex;
  align-items:center;
  justify-content:center;`;

  const TopLeftContainer = Styled.div`
  flex:1;`;

  const TopRightContainer = Styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-end;
  flex:1;`;

  const Heading = Styled.span`
  color:${colorTheme.fontPri};
  font-size:35px;
  font-weight:bold;`;

  const MiddleContainer = Styled.div`
  `;
  return (
    <EmailContainer>
      {/* <TopContainer>
        <TopLeftContainer>
          <Heading>Inbox</Heading>
        </TopLeftContainer>
        <TopRightContainer>
          <RefreshButtonIcon text={"Refresh"} />
        </TopRightContainer>
      </TopContainer> */}
      {/* <MiddleContainer> */}
      <MailPage />
      {/* </MiddleContainer> */}
    </EmailContainer>
  );
};

export default EmailInterface;
