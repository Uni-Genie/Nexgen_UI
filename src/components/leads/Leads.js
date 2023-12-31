import React, { useState, useContext } from "react";
import Styled from "styled-components";
import { ContextProvider } from "../../App";
import SendIcon from "@mui/icons-material/Send";
const Container = Styled.div``;
const Wrapper = Styled.div``;
const DetailsContainer = Styled.div`
margin: 20px;
margin-top:0px;
`;

const Row = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const RowFilled = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) => props.colorTheme.backPri};
`;

const Key = Styled.div`
  padding: 12px;
  font-weight: bold;
  color: ${(props) => props.colorTheme.fontPri};
  flex: 1;
`;

const Value = Styled.div`
  padding: 12px;
  color: ${(props) => props.colorTheme.fontPri};
  flex: 1;
`;

const SendContainer = Styled.div`

padding:20px 40px;
display:flex;
align-items:center;
justify-content:center;
border-bottom-right-radius:10px;
border-bottom-left-radius:10px;

`;

const Center = Styled.div`
width:60%;
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
border-radius:50px;
padding:2px 20px;
background-color:${(props) => props.colorTheme.backPri};
`;
const Input = Styled.input`
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
color:${(props) => props.colorTheme.fontPri};
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
const Home = () => {
  const { colorTheme } = useContext(ContextProvider);
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState([
    {
      Name: "NAME",
      Title: "TITLE",
      Company: "COMPANY",
      Location: "LOCATION",
      Phone: "PHONE",
      Industry: "INDUSTRY",
      Status: "STATUS",
    },
    {
      Name: "John Doe",
      Title: "CEO",
      Company: "Acme Corp",
      Location: "New York",
      Phone: "123-456-7890",
      Industry: "Technology",
      Status: "sent",
    },
    {
      Name: "Jane Smith",
      Title: "CFO",
      Company: "XYZ Inc",
      Location: "Los Angeles",
      Phone: "987-654-3210",
      Industry: "Finance",
      Status: "pending",
    },
    {
      Name: "Bob Johnson",
      Title: "CTO",
      Company: "Tech Innovations",
      Location: "San Francisco",
      Phone: "555-123-4567",
      Industry: "Technology",
      Status: "pending",
    },
    {
      Name: "Alice Williams",
      Title: "COO",
      Company: "Global Solutions",
      Location: "Chicago",
      Phone: "789-012-3456",
      Industry: "Consulting",
      Status: "pending",
    },
    {
      Name: "David Brown",
      Title: "VP of Marketing",
      Company: "Marketing Trends",
      Location: "Miami",
      Phone: "234-567-8901",
      Industry: "Marketing",
      Status: "pending",
    },
    {
      Name: "Eva Garcia",
      Title: "HR Manager",
      Company: "Human Resources Inc",
      Location: "Dallas",
      Phone: "876-543-2109",
      Industry: "Human Resources",
      Status: "sent",
    },
    {
      Name: "Frank Martinez",
      Title: "Sales Director",
      Company: "Sales Solutions",
      Location: "Houston",
      Phone: "321-098-7654",
      Industry: "Sales",
      Status: "sent",
    },
    {
      Name: "Grace Lee",
      Title: "IT Manager",
      Company: "IT Innovators",
      Location: "Seattle",
      Phone: "654-321-0987",
      Industry: "Information Technology",
      Status: "sent",
    },
    {
      Name: "Henry Turner",
      Title: "Product Manager",
      Company: "Product Creations",
      Location: "Denver",
      Phone: "890-123-4567",
      Industry: "Product Development",
      Status: "sent",
    },
    {
      Name: "Ivy Mitchell",
      Title: "Operations Coordinator",
      Company: "Operations Hub",
      Location: "Atlanta",
      Phone: "432-109-8765",
      Industry: "Operations",
      Status: "sent",
    },
    {
      Name: "John Doe",
      Title: "CEO",
      Company: "Acme Corp",
      Location: "New York",
      Phone: "123-456-7890",
      Industry: "Technology",
      Status: "sent",
    },
    {
      Name: "Jane Smith",
      Title: "CFO",
      Company: "XYZ Inc",
      Location: "Los Angeles",
      Phone: "987-654-3210",
      Industry: "Finance",
      Status: "sent",
    },
    {
      Name: "Bob Johnson",
      Title: "CTO",
      Company: "Tech Innovations",
      Location: "San Francisco",
      Phone: "555-123-4567",
      Industry: "Technology",
      Status: "sent",
    },
    {
      Name: "Alice Williams",
      Title: "COO",
      Company: "Global Solutions",
      Location: "Chicago",
      Phone: "789-012-3456",
      Industry: "Consulting",
      Status: "sent",
    },
    {
      Name: "David Brown",
      Title: "VP of Marketing",
      Company: "Marketing Trends",
      Location: "Miami",
      Phone: "234-567-8901",
      Industry: "Marketing",
      Status: "pending",
    },
    {
      Name: "Eva Garcia",
      Title: "HR Manager",
      Company: "Human Resources Inc",
      Location: "Dallas",
      Phone: "876-543-2109",
      Industry: "Human Resources",
      Status: "sent",
    },
    {
      Name: "Frank Martinez",
      Title: "Sales Director",
      Company: "Sales Solutions",
      Location: "Houston",
      Phone: "321-098-7654",
      Industry: "Sales",
      Status: "pending",
    },
    {
      Name: "Grace Lee",
      Title: "IT Manager",
      Company: "IT Innovators",
      Location: "Seattle",
      Phone: "654-321-0987",
      Industry: "Information Technology",
      Status: "sent",
    },
    {
      Name: "Henry Turner",
      Title: "Product Manager",
      Company: "Product Creations",
      Location: "Denver",
      Phone: "890-123-4567",
      Industry: "Product Development",
      Status: "sent",
    },
    {
      Name: "Ivy Mitchell",
      Title: "Operations Coordinator",
      Company: "Operations Hub",
      Location: "Atlanta",
      Phone: "432-109-8765",
      Industry: "Operations",
      Status: "sent",
    },
  ]);
  const [filteredUserData, setFilteredUserData] = useState(userData);
  const handleSearchChange = (e) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);

    const filteredData = userData.filter((user) =>
      Object.values(user).some((value) =>
        value.toString().toLowerCase().includes(newSearchQuery.toLowerCase())
      )
    );

    setFilteredUserData(filteredData);
  };

  return (
    <Container>
      <Wrapper>
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
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                // className="NavbarInput"
              />
            </InputContainer>
          </Center>
        </SendContainer>
        <DetailsContainer>
          {filteredUserData.map((user, index) =>
            index % 2 === 0 ? (
              <Row colorTheme={colorTheme}>
                <Key colorTheme={colorTheme}>{user.Name}</Key>
                <Value colorTheme={colorTheme}>{user.Title}</Value>
                <Value colorTheme={colorTheme}>{user.Company}</Value>
                <Value colorTheme={colorTheme}>{user.Location}</Value>
                <Value colorTheme={colorTheme}>{user.Phone}</Value>
                <Value colorTheme={colorTheme}>{user.Industry}</Value>
                <Value colorTheme={colorTheme}>{user.Status}</Value>
              </Row>
            ) : (
              <RowFilled colorTheme={colorTheme}>
                <Key colorTheme={colorTheme}>{user.Name}</Key>
                <Value colorTheme={colorTheme}>{user.Title}</Value>
                <Value colorTheme={colorTheme}>{user.Company}</Value>
                <Value colorTheme={colorTheme}>{user.Location}</Value>
                <Value colorTheme={colorTheme}>{user.Phone}</Value>
                <Value colorTheme={colorTheme}>{user.Industry}</Value>
                <Value colorTheme={colorTheme}>{user.Status}</Value>
              </RowFilled>
            )
          )}
        </DetailsContainer>
      </Wrapper>
    </Container>
  );
};
export default Home;
