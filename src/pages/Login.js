import React, { useContext } from "react";
import { ContextProvider } from "../App";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import Text from "../components/General/Text";
import Styled from "styled-components";
import Button from "../components/General/Button";
import InputContainer from "../components/General/InputContainer";

const Container = Styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
background-color:${(props) => props.bgColor};
box-sizing:border-box;
`;

const Wrapper = Styled.div`
width:30%;
height:content-fit;
padding-bottom:20px;
box-sizing:border-box;
border-radius:10px;
background-color:${(props) => props.bgColor};
`;

const HeadingContainer = Styled.div`
padding:20px 30px;
display:flex;
align-items:center;
justify-content:center;
`;

const ContentContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

const FormContainer = Styled.div`
flex:1;
width:100%;
`;

const Form = Styled.form`
padding:5px 20px;
`;

const AutoLoginContainer = Styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
padding:5px 20px;
`;

const PartitionContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:5px 20px;
`;

const ButtonContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:10px 10px;
`;
const Login = () => {
  const { colorTheme, theme } = useContext(ContextProvider);

  const { backPri, backSec, fontPri, fontSec } = colorTheme;

  //elements

  return (
    <Container bgColor={backPri}>
      <Wrapper bgColor={backSec}>
        <HeadingContainer>
          {/* <Title ftSize={"32px"} ftWeight={"10px"} ftColor={fontPri} /> */}

          <Text
            ftColor={fontPri}
            val={"Login"}
            ftSize={"32px"}
            ftWeight={"Bolder"}
          ></Text>
        </HeadingContainer>
        <ContentContainer>
          <AutoLoginContainer>
            <GoogleOAuthProvider clientId="598115788575-3plobo4b6ll5h1culkokc7f3ibtc7ron.apps.googleusercontent.com">
              <GoogleLogin
                theme={theme === "dark" ? "filled_blue" : "outline"}
                onSuccess={(credentialResponse) => {
                  console.log(jwt_decode(credentialResponse.credential));
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </AutoLoginContainer>
          <PartitionContainer>
            <Text
              ftColor={fontSec}
              val={"or"}
              ftSize={"20px"}
              ftWeight={"bolder"}
            ></Text>
          </PartitionContainer>
          <FormContainer>
            <Form>
              <InputContainer
                label="email"
                placeholder="abc@gmail.com"
                type="email"
              />

              <InputContainer
                label="password"
                placeholder="password"
                type="password"
              ></InputContainer>
            </Form>
          </FormContainer>
          <ButtonContainer>
            <Button text={"Login"}></Button>
          </ButtonContainer>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;
