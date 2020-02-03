import React from "react";

import Card from "./components/Card";
import Header from "./components/Header";
import TextBlock from "./components/TextBlock";
import "./App.css";


function App() {
  return (
    <div className="App" style={appStyle}>
      <Header title="GraphQL test" />
      <TextBlock>
        The State of Javascript survey collected responses from over 22,000
        developers in 2019. Participants were asked a series of questions about
        different aspects of JavaScript, including front and back-end
        frameworks, ES6, mobile development, and testing.
      </TextBlock>
      <TextBlock>
        The final results are summarised in a report and changes from previous
        surveys analysed and visualised using a variety of tools.
      </TextBlock>
      <Card />
      <Card />
      <Card />
      <TextBlock>
        The State of JavaScript Survey is created and maintained by Sacha Greif
        (Design, writing, coding) and Raphaël Benitte (Data analysis, data
        visualizations). Through their website stateofjs.com the raw data is
        made available through a GraphQL API. This app uses GraphQL queries to
        access some of the results and summarises them.
      </TextBlock>
    </div>
  );
}

const appStyle = {};

export default App;
