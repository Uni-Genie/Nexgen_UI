import React, { useState, useContext } from "react";
import Styled from "styled-components";
import Button from "../General/Button";
import { ContextProvider } from "../../App";

const PageContainer = Styled.div`
  display: flex;
  
`;

const LeftPanel = Styled.div`
  width: 40%;
  border-right:solid 1px;
  border-color:${(props) => props.colorTheme.backPri};
  overflow: auto;
  
`;

const RightPanel = Styled.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const EmailList = Styled.div`
  padding: 20px;
`;

const EmailListItem = Styled.div`
  padding: 10px;
  border-radius:10px;
  margin-bottom:10px;
  background-color: ${(props) => props.colorTheme.backPri};
  color:${(props) => props.colorTheme.fontSec};
  cursor: pointer;
  &:hover {
   background-color: ${(props) => props.colorTheme.backPri};
  };

`;

const ComposeContainer = Styled.div`
  width: 80%;
  padding: 20px;
`;

const MailView = Styled.div`
  width: 80%;
  padding: 20px;
  color: ${(props) => props.colorTheme.fontPri};
`;

const Input = Styled.input`
  border-radius:10px;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;

  box-sizing: border-box;
  outline:none;
  font-family: 'Quicksand', sans-serif;
  color:${(props) => props.colorTheme.fontPri};
  background-color:${(props) => props.colorTheme.backPri};
`;

const TextArea = Styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius:10px;
  max-width:100%;
  min-width:100%;
  margin: 10px 0;
  border: none;
  box-sizing: border-box;
  outline:none;
  font-family: 'Quicksand', sans-serif;
  min-height:30vh;
  color:${(props) => props.colorTheme.fontPri};
  background-color:${(props) => props.colorTheme.backPri};
`;
const ComposeButtonContainer = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding-top:20px;`;

const TopContainer = Styled.div`
padding:20px;
padding-bottom:0px;
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
font-size:25px;
font-weight:bold;
color:${(props) => props.colorTheme.fontPri};

`;
const LabelsContainer = Styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
padding-top:20px;
`;

// Main component
const MailPage = () => {
  const { colorTheme } = useContext(ContextProvider);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const [composeEmail, setComposeEmail] = useState(false);

  const [composeForm, setComposeForm] = useState({
    to: "",
    subject: "",
    body: "",
    labels: "",
  });
  const emails = [
    {
      id: 1,
      sender: "Alice",
      subject: "Meeting Schedule",
      snippet: "About the upcoming meeting...",
      labels: ["work", "meeting"],
    },
    {
      id: 2,
      sender: "Bob",
      subject: "Project Update",
      snippet: "Here is the update on the project...",
      labels: ["work", "project"],
    },
    {
      id: 3,
      sender: "Second",
      subject: "Project Update",
      snippet: "Here is the update on the project...",
      labels: ["work", "project"],
    },
    {
      id: 2,
      sender: "Third",
      subject: "Project Update",
      snippet: "Here is the update on the project...",
      labels: ["work", "project"],
    },
    {
      id: 2,
      sender: "Fourth",
      subject: "Project Update",
      snippet: "Here is the update on the project...",
      labels: ["work", "project"],
    },
    {
      id: 2,
      sender: "Fifth",
      subject: "Project Update",
      snippet: "Here is the update on the project...",
      labels: ["work", "project"],
    },
  ];

  const handleEmailSelect = (email) => {
    setSelectedEmail(email);
    setComposeEmail(false);
  };

  const handleCompose = () => {
    setSelectedEmail(null);
    setComposeEmail(true);
    setComposeForm({ to: "", subject: "", body: "", labels: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComposeForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    console.log("Sending email:", composeForm);
  };

  const handleReset = () => {
    setComposeForm({ to: "", subject: "", body: "", labels: "" });
  };
  console.log(colorTheme.backPri);
  return (
    <PageContainer>
      <LeftPanel colorTheme={colorTheme}>
        <TopContainer>
          <TopLeftContainer>
            <Heading colorTheme={colorTheme}>Recent Mails</Heading>
          </TopLeftContainer>
          <TopRightContainer>
            <Button compose={handleCompose} text={"Compose"}></Button>
          </TopRightContainer>
        </TopContainer>
        <EmailList>
          <EmailListItem colorTheme={colorTheme}>
            <div>
              <strong>Draft</strong>
            </div>
            <div>
              <strong>Subject:</strong> {composeForm.subject}
            </div>
            <div>{composeForm.body}</div>
          </EmailListItem>
          {emails.map((email) => (
            <EmailListItem
              colorTheme={colorTheme}
              key={email.id}
              onClick={() => handleEmailSelect(email)}
            >
              <div>
                <strong>From:</strong> {email.sender}
              </div>
              <div>
                <strong>Subject:</strong> {email.subject}
              </div>
              <div>{email.snippet}</div>
            </EmailListItem>
          ))}
        </EmailList>
      </LeftPanel>
      <RightPanel colorTheme={colorTheme}>
        {composeEmail ? (
          <ComposeContainer>
            <form onSubmit={handleSend}>
              <Input
                colorTheme={colorTheme}
                type="text"
                placeholder="To"
                name="to"
                value={composeForm.to}
                onChange={handleInputChange}
              />
              <Input
                colorTheme={colorTheme}
                type="text"
                placeholder="Subject"
                name="subject"
                value={composeForm.subject}
                onChange={handleInputChange}
              />
              <TextArea
                colorTheme={colorTheme}
                placeholder="Body"
                name="body"
                value={composeForm.body}
                onChange={handleInputChange}
              />
              <Input
                colorTheme={colorTheme}
                type="text"
                placeholder="Labels"
                name="labels"
                value={composeForm.labels}
                onChange={handleInputChange}
              />
              <ComposeButtonContainer>
                <Button text={"Reset"} compose={handleReset}>
                  Reset
                </Button>
                <Button text={"Send"} compose={handleSend}></Button>
              </ComposeButtonContainer>
            </form>
          </ComposeContainer>
        ) : selectedEmail ? (
          <MailView colorTheme={colorTheme}>
            <div>
              <strong>{selectedEmail.subject}</strong>
            </div>
            <LabelsContainer>
              {selectedEmail.labels.map((label) => (
                <div
                  style={{
                    backgroundColor: colorTheme.backPri,

                    color: colorTheme.fontSec,
                    padding: "5px",
                    borderRadius: "5px",
                    marginRight: "5px",
                  }}
                >
                  {label}
                </div>
              ))}
            </LabelsContainer>
            <div style={{ paddingTop: "20px" }}>
              <strong>From: </strong>
              {selectedEmail.sender}
            </div>
            <p>{selectedEmail.snippet}</p>
          </MailView>
        ) : (
          <div style={{ color: colorTheme.fontPri, marginTop: "30px" }}>
            Select an email to view
          </div>
        )}
      </RightPanel>
    </PageContainer>
  );
};

export default MailPage;
