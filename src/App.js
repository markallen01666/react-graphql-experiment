import React from "react";

import Card from "./components/Card";
import Header from "./components/Header";
import TextBlock from "./components/TextBlock";
import "./App.css";

// read and process survey results
let toolList = ["react", "angular", "vuejs", "jest", "reactnative"];
let surveyResults = {};

for (let i = 0; i < toolList.length; i++) {
  // build query
  let query = `
  query {
    survey(survey: js) {
      tool(id: ${toolList[i]}) {
        id
        experience {
          allYears{
            year
            total
            awarenessInterestSatisfaction {
              awareness
              interest
              satisfaction
            }
          }
        }
      }
    }
  }`;
  // execute query
  const url = "https://api.stateofjs.com/graphql";
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  };
  fetch(url, opts)
    .then(res => res.json())
    .then(resJSON => {
      // extract required data into surveyResults
      surveyResults[resJSON.data.survey.tool.id] = {
        "total": resJSON.data.survey.tool.experience.allYears["3"].total,
        "awareness": resJSON.data.survey.tool.experience.allYears["3"].awarenessInterestSatisfaction.awareness,
        "interest": resJSON.data.survey.tool.experience.allYears["3"].awarenessInterestSatisfaction.interest,
        "satisfaction": resJSON.data.survey.tool.experience.allYears["3"].awarenessInterestSatisfaction.satisfaction
      } 
    })
    .catch(console.error);
} // -- end of read and process survey results --
console.log(surveyResults);

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
      <Card id="card-1" results={surveyResults} />
      <Card id="card-2" results={surveyResults} />
      <Card id="card-3" results={surveyResults} />
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

const appStyle = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

export default App;
