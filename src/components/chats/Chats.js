import React, { useContext } from "react";
import Styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { Mobile } from "../../responsive";
import { ContextProvider } from "../../App";

const Container = Styled.div`
flex:5;
height:calc(100vh - 60px);
${Mobile((props) =>
  props.active ? { visibility: "visible" } : { display: "none", flex: "" }
)};
`;

const SendContainer = Styled.div`
position:sticky;
height:80px;
top:100%;
display:flex;
align-items:center;
justify-content:center;
border-bottom-right-radius:10px;
border-bottom-left-radius:10px;
`;

const Center = Styled.div`
width:90%;
display:flex;
align-items:center;
justify-content:center;`;

const InputContainer = Styled.div`
flex:9;
height:45px;
display:flex;
align-items:center;
jusify-content:center;
border:none;
border-top-left-radius:50px;
border-bottom-left-radius:50px;
padding:2px 20px;
background-color:${(props) => props.colorTheme.backPri};
`;
const Input = Styled.input`
color:${(props) => props.colorTheme.fontPri};
font-size: 18px;
font-size: 18px;
flex: 1;
width:80%;
border:none;
height: 30px;
outline:none;
&:focus{
 font-size: 18px;
font-size: 18px;
flex: 1;
border:none;
height: 35px;
outline:none;
};
background-color:${(props) => props.colorTheme.backPri};

`;

const SearchIconContainer = Styled.div`

height:45px;
width:45px;
border-left:none;
display:flex;
align-items:center;
jusify-content:center;
border-top-right-radius:50px;
border-bottom-right-radius:50px;
padding:2px 4px;
border:none;
background-color:${(props) => props.colorTheme.backPri};
`;
const MessageContainerSender = Styled.div`
width:100%;
height:content-fit;
display:flex;
align-items:center;
margin:10px 0px;
justify-content:flex-start;


`;
const MessageContainer = Styled.div`
width:100%;
height:content-fit;
display:flex;
align-items:center;
justify-content:flex-end;

`;
const SenderMessage = Styled.div`
width:content-fit;
max-width:40%;
margin-left:20px;
background-color:white;
border-radius:20px;
border-top-left-radius:0px;
padding:5px 7px;
background-color:${(props) => props.colorTheme.backPri};
`;

const UserMessage = Styled.div`
width:content-fit;
max-width:40%;
margin-right:20px;
border-radius:20px;
border-top-right-radius:0px;
background-color:${(props) => props.colorTheme.mainColor};
padding:5px 7px;
`;

const MessageDetail = Styled.div`
height:content-fit;
display:flex;
align-items:center;
justify-content:space-between;
`;

const MessageContent = Styled.div`
height:content-fit;
`;

const NameText = Styled.span`
font-size:17px;
font-weight:bold;
color:white;`;

const NameTextSender = Styled.span`
font-size:17px;
font-weight:bold;
color:${(props) => props.colorTheme.mainColor};`;

const MessageText = Styled.span`
color:${(props) => props.colorTheme.fontPri};
padding:2px 4px;
font-size:18px;`;

const MessageTextUser = Styled.span`
color:white;
padding:2px 4px;
font-size:18px;`;

const UserIconContainer = Styled.div`
display:flex;
align-items:center;
cursor:pointer;
width:55px;
height:55px;
justify-content:center;
`;

const MessageListContainer = Styled.div`
height:calc(100vh - 140px);
&::-webkit-scrollbar{
    display:none;
};
overflow-x:scroll;`;

const messagesList = [
  {
    id: 1,
    message: "Hi, how does photosynthesis work?",
    sender: "user",
    reply:
      "Photosynthesis is the process by which plants convert sunlight into energy, producing oxygen as a byproduct. It involves the absorption of sunlight by chlorophyll in plant cells, leading to the synthesis of glucose from carbon dioxide and water.",
    time: "2.14 pm",
    date: "July 5",
  },
  {
    id: 2,
    message: "Can you recommend a good book for learning Python?",
    sender: "user",
    reply:
      "Certainly! 'Python Crash Course' by Eric Matthes is an excellent choice for beginners. It covers Python fundamentals and includes hands-on projects to reinforce your learning.",
    time: "2.14 pm",
    date: "July 5",
  },
  {
    id: 3,
    message:
      "What are some tips for improving productivity while working from home?",
    sender: "user",
    reply:
      "To boost productivity, establish a dedicated workspace, set a schedule, take breaks, and minimize distractions. Additionally, prioritize tasks and use productivity tools like to-do lists or time management apps.",
    time: "2.14 pm",
    date: "July 5",
  },
  {
    id: 4,
    message: "I'm feeling stressed lately. Any advice on managing stress?",
    sender: "user",
    reply:
      "It's important to prioritize self-care. Try activities like deep breathing exercises, meditation, or physical exercise. Talking to someone you trust can also provide emotional support.",
    time: "2.14 pm",
    date: "July 5",
  },
  {
    id: 5,
    message: "What are the benefits of regular exercise?",
    sender: "user",
    reply:
      "Regular exercise has numerous benefits, including improved cardiovascular health, weight management, enhanced mood, better sleep, and reduced risk of chronic diseases.",
    time: "2.14 pm",
    date: "July 5",
  },
  {
    id: 6,
    message: "How can I start a career in artificial intelligence?",
    sender: "user",
    reply:
      "Begin by gaining a solid understanding of programming languages like Python, study machine learning fundamentals, and explore AI frameworks. Consider pursuing relevant courses or certifications and work on practical projects.",
    time: "2.14 pm",
    date: "July 5",
  },
  {
    id: 7,
    message: "Can you recommend a good documentary on space exploration?",
    sender: "user",
    reply:
      "'Apollo 11' is a fascinating documentary that provides an in-depth look at the historic moon landing. It features original NASA footage and interviews with astronauts.",
    time: "2.14 pm",
    date: "July 5",
  },
  {
    id: 8,
    message: "What's the best way to learn a new language?",
    sender: "user",
    reply:
      "Immersion is effective. Practice speaking, listening, reading, and writing in the language. Use language learning apps, engage with native speakers, and watch movies or read books in the target language.",
    time: "2.14 pm",
    date: "July 5",
  },
  {
    id: 9,
    message: "Any tips for writing a compelling resume?",
    sender: "user",
    reply:
      "Tailor your resume for each job, highlighting relevant skills and experiences. Use action verbs, quantify achievements, and keep it concise. A well-crafted resume should grab the employer's attention quickly.",
    time: "2.14 pm",
    date: "July 5",
  },
  {
    id: 10,
    message: "What are some eco-friendly habits I can adopt in my daily life?",
    sender: "user",
    reply:
      "Reduce waste by recycling, using reusable items, and conserving water and energy. Choose sustainable products, support local and eco-friendly businesses, and consider reducing meat consumption for a smaller environmental footprint.",
    time: "2.14 pm",
    date: "July 5",
  },
];

const Chats = () => {
  const { colorTheme } = useContext(ContextProvider);
  return (
    <Container>
      <MessageListContainer>
        {messagesList.map((item) => (
          <>
            <MessageContainer colorTheme={colorTheme}>
              <UserMessage colorTheme={colorTheme}>
                <MessageDetail colorTheme={colorTheme}>
                  <NameText colorTheme={colorTheme}>You</NameText>
                </MessageDetail>
                <MessageContent colorTheme={colorTheme}>
                  <MessageTextUser colorTheme={colorTheme}>
                    {item.message}
                  </MessageTextUser>
                </MessageContent>
              </UserMessage>
              <UserIconContainer></UserIconContainer>
            </MessageContainer>
            <MessageContainerSender colorTheme={colorTheme}>
              <UserIconContainer></UserIconContainer>
              <SenderMessage colorTheme={colorTheme}>
                <MessageDetail colorTheme={colorTheme}>
                  <NameTextSender colorTheme={colorTheme}>
                    Chat Bot
                  </NameTextSender>
                </MessageDetail>
                <MessageContent colorTheme={colorTheme}>
                  <MessageText colorTheme={colorTheme}>
                    {item.reply}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
          </>
        ))}
      </MessageListContainer>

      <SendContainer colorTheme={colorTheme}>
        <Center colorTheme={colorTheme}>
          <InputContainer
            colorTheme={colorTheme}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
              }
            }}
          >
            <Input
              colorTheme={colorTheme}
              placeholder="Type to Chat"
              className="NavbarInput"
            />
          </InputContainer>
          <SearchIconContainer colorTheme={colorTheme}>
            <SendIcon
              style={{
                height: "35px",
                width: "35px",
                cursor: "pointer",
                color: colorTheme.mainColor,
                "@media max-width:(480px)": {
                  height: "30px",
                  width: "30px",
                },
              }}
              onClick={() => {}}
            />
          </SearchIconContainer>
        </Center>
      </SendContainer>
    </Container>
  );
};

export default Chats;
