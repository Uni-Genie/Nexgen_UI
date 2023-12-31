import React, { useState, useContext } from "react";
import Styled from "styled-components";
import { ContextProvider } from "../../App";
import Button from "../General/Button";
const Container = Styled.div` 
`;

const Wrapper = Styled.div`
`;

const DetailsContainer = Styled.div`
  margin: 20px;
`;

const TableData = Styled.div``;

const Row = Styled.div`
display:flex;
align-items:center;
justify-content:center;

border-radius:10px;`;

const RowFilled = Styled.div`
display:flex;
align-items:center;
justify-content:center;
border-radius:10px;
background-color:${(props) => props.colorTheme.backPri};
`;

const Key = Styled.div`
padding: 12px;
font-weight:bold;
color:${(props) => props.colorTheme.fontPri};
flex:1;`;

const Value = Styled.div`
padding: 12px;
color:${(props) => props.colorTheme.fontPri};
flex:1;`;

const InputField = Styled.input`
  width: 100%;
  padding: 7px 12px;
  box-sizing: border-box;
  font-size:14px;
  border:none;
  outline:none;
  font-family: 'Quicksand', sans-serif;
  border-radius:10px;
  background-color:${(props) => props.colorTheme.backSec};
  color:${(props) => props.colorTheme.fontPri};
  `;
const InputFieldFilled = Styled.input`
  width: 100%;
  border-radius:10px;
  padding: 7px 12px;
  box-sizing: border-box;
  font-size:14px;
  border:none;
  outline:none;
  font-family: 'Quicksand', sans-serif;
  background-color:${(props) => props.colorTheme.backPri};
  color:${(props) => props.colorTheme.fontPri};
`;

const ButtonContainer = Styled.div`
padding:20px 0px;`;
const Home = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { colorTheme } = useContext(ContextProvider);
  const [userData, setUserData] = useState({
    Name: "John Doe",
    CompanyWebsite: "www.example.com",
    CompanyName: "Example Inc.",
    MainBusinessDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
    ValueProp1: "Innovation",
    ValueProp2: "Quality",
    ValueProp3: "Customer Satisfaction",
    PainPoint1: "High Costs",
    PainPoint2: "Limited Resources",
    CountriesTargeting: "United States, Europe",
    JobTitles: "CEO, CTO, CFO",
    Sectors: "Technology, Finance",
    Revenue: "$1 million - $10 million",
    MeetingLink: "https://example-meeting-link.com",
  });

  const handleUpdate = () => {
    setIsEditing(false);
  };

  const handleInputChange = (key, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <Container>
      <Wrapper>
        <DetailsContainer>
          <TableData>
            {Object.entries(userData).map(([key, value], index) =>
              index % 2 === 0 ? (
                <Row key={key} colorTheme={colorTheme}>
                  <Key colorTheme={colorTheme}>
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </Key>

                  <Value colorTheme={colorTheme}>
                    {isEditing ? (
                      <InputFieldFilled
                        colorTheme={colorTheme}
                        type="text"
                        value={value}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                      />
                    ) : (
                      value
                    )}
                  </Value>
                </Row>
              ) : (
                <RowFilled colorTheme={colorTheme} key={key} theme>
                  <Key colorTheme={colorTheme}>
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </Key>

                  <Value colorTheme={colorTheme}>
                    {isEditing ? (
                      <InputField
                        colorTheme={colorTheme}
                        type="text"
                        value={value}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                      />
                    ) : (
                      value
                    )}
                  </Value>
                </RowFilled>
              )
            )}
          </TableData>
          <ButtonContainer>
            {isEditing ? (
              <Button compose={handleUpdate} text="Save"></Button>
            ) : (
              <Button compose={() => setIsEditing(true)} text="Edit"></Button>
            )}
          </ButtonContainer>
        </DetailsContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
