import React, { useRef, useEffect, useState, useContext } from "react";
import Styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ContextProvider } from "../../App";
const data = [
  { name: "Sunday", rate: 40 },
  { name: "Monday", rate: 50 },
  { name: "Tuesday", rate: 30 },
  { name: "Wednesday", rate: 10 },
  { name: "Thursday", rate: 15 },
  { name: "Friday", rate: 12 },
  { name: "Saturday", rate: 1 },
];

const Container = Styled.div`
  display: flex;
  overflow:scroll;
  &::-webkit-scrollbar{
    display:none;
  };
  
  margin-right:30px;

`;

const SimpleLineChart = () => {
  const { colorTheme } = useContext(ContextProvider);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(600);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.getBoundingClientRect().width;
        setContainerWidth(width);
      }
    };
    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);
    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, [containerRef]);

  return (
    <Container ref={containerRef}>
      <LineChart width={containerWidth} height={350} data={data}>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="rate" stroke={colorTheme.mainColor} />
      </LineChart>
    </Container>
  );
};

export default SimpleLineChart;
