import React from "react";
import Styled from "styled-components";
import RefreshIcon from "@mui/icons-material/Refresh";
const Buttons = Styled.button`
display:flex;
align-items:center;
justify-content:space-between;
border:none;
color:white;
cursor:pointer;
background-color:#1A73E8;
padding:7px 20px;
border-radius:5px;
transition:0.2s all ease;
font-size:20px;
&:hover{
    background-color:#1A73AA;
};
`;

const IconButton = ({ text }) => {
  return (
    <Buttons>
      <RefreshIcon />
    </Buttons>
  );
};

export default IconButton;
