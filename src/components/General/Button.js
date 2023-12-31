import React from "react";
import Styled from "styled-components";
const Buttons = Styled.button`
border:none;
color:white;
cursor:pointer;
background-color:#1A73E8;
&:hover{
    background-color:#1A73AA;
}
padding:7px 20px;
border-radius:5px;
transition:0.2s all ease;
font-size:20px;`;

const Button = ({ text, compose }) => {
  return <Buttons onClick={compose}>{text}</Buttons>;
};

export default Button;
