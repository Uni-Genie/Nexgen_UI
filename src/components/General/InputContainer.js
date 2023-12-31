import React, { useContext } from "react";
import Styled from "styled-components";
import { ContextProvider } from "../../App";

const Container = Styled.div`
width:100%;
`;

const InputBox = Styled.div`
background-color:${(props) => props.bgColor};
margin-top:10px;
border:solid 1px #dadce0;
border-radius:5px;
padding:5px 12px;
box-sizing:border-box;
margin-bottom:20px;
`;

const Input = Styled.input`
background-color:${(props) => props.bgColor};
font-size:16px;
color:${(props) => props.ftColor};
width:100%;
border:none;
height:30px;
&:focus{
  outline:none;
};
&:-webkit-autofill {
    -webkit-box-shadow:${(props) => `0 0 0 50px ${props.bgColor} inset`};
    -webkit-text-fill-color: ${(props) => props.ftColor};
};
`;

const Label = Styled.label`
color:${(props) => props.ftColor};
`;

const InputContainer = ({ input, setInput, label, type, placeholder }) => {
  const { colorTheme } = useContext(ContextProvider);

  const { backPri, fontPri } = colorTheme;
  return (
    <Container>
      <Label ftColor={fontPri}>
        {label.charAt(0).toUpperCase() + label.slice(1, label.length)}
      </Label>
      <InputBox bgColor={backPri}>
        <Input
          bgColor={backPri}
          ftColor={fontPri}
          placeholder={placeholder}
          type={type}
        />
      </InputBox>
    </Container>
  );
};

export default InputContainer;
