import React, { useContext } from "react";
import Styled from "styled-components";
import LineChart from "./SimpleLineChart";
import { ContextProvider } from "../../App";

const Container = Styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content:space-around;
  padding: 20px;
  
`;

const Widget = Styled.div`
  flex: 0 0 calc(25.33% - 20px);
  background-color: ${(props) => props.colorTheme.backPri};
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color:${(props) => props.colorTheme.fontPri};

  h2 {
    margin-bottom: 10px;
    font-size: 18px;
    color:${(props) => props.colorTheme.mainColor};
  }

  p {
    font-size: 24px;
    font-weight: bold;
  }
`;
const ChartContainer = Styled.div`
    width:100%;
    color:${(props) => props.colorTheme.fontPri};
`;

const Dashboard = () => {
  const { colorTheme } = useContext(ContextProvider);
  const chartData = {
    labels: [1, 2, 3, 4, 5],
    values: [10, 15, 7, 25, 20],
  };
  return (
    <Container>
      <ChartContainer colorTheme={colorTheme}>
        <LineChart data={chartData} />
      </ChartContainer>

      <Widget colorTheme={colorTheme}>
        <h2>Monthly Target</h2>
        <p>1234</p>
      </Widget>
      <Widget colorTheme={colorTheme}>
        <h2>Total Mails Sent</h2>
        <p>1234</p>
      </Widget>

      <Widget colorTheme={colorTheme}>
        <h2>Successful Mails</h2>
        <p>987</p>
      </Widget>

      <Widget colorTheme={colorTheme}>
        <h2>Unsuccessful Mails</h2>
        <p>23</p>
      </Widget>

      <Widget colorTheme={colorTheme}>
        <h2>Mails Replied</h2>
        <p>456</p>
      </Widget>

      <Widget colorTheme={colorTheme}>
        <h2>Mails Read/Opened</h2>
        <p>789</p>
      </Widget>
      <Widget colorTheme={colorTheme}>
        <h2>Conversion</h2>
        <p>789</p>
      </Widget>
      <Widget colorTheme={colorTheme}>
        <h2>Spam</h2>
        <p>789</p>
      </Widget>
      <Widget colorTheme={colorTheme}>
        <h2>Spam</h2>
        <p>789</p>
      </Widget>
    </Container>
  );
};

export default Dashboard;
