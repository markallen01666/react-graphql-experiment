import React, { useState } from "react";

import Cell from "./Cell";
import Picker from "./Picker";

const Card = props => {
  const [queryTool, setQueryTool] = useState("none");
  const [awareness, setAwareness] = useState();
  const [interest, setInterest] = useState();
  const [satisfaction, setSatisfaction] = useState();
  const [participants, setParticipants] = useState();

  const toolChangedHandler = toolName => {
    console.log("Toolname:")
    console.log(toolName);
    let newName = "react";
    setQueryTool(newName);
    console.log("queryTool");
    console.log(queryTool);
    let query = `
      query {
        survey(survey: js) {
          tool(id: ${queryTool}) {
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

      const url = "https://api.stateofjs.com/graphql";
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      };
      fetch(url, opts)
        .then(res => {
          return res.json();
        })
        .then(myJson => {
          console.log(myJson);
          setAwareness("0")
        })
        .catch(console.error);
      console.log(`Selected: ${queryTool}`)
    };

  return (
    <div style={{ ...cardStyle, ...props.style }}>
      <Cell style={{ flex: "1" }}>
        <Picker changeTool={toolChangedHandler} value={queryTool} />
      </Cell>
      <Cell style={{ flex: "2" }}>Awareness: {awareness}%</Cell>
      <Cell style={{ flex: "2" }}>Interest: {interest}%</Cell>
      <Cell style={{ flex: "2" }}>Satisfaction: {satisfaction}%</Cell>
      <Cell style={{ flex: "2" }}>Participants: {participants}%</Cell>
    </div>
  );
};

const cardStyle = {
  display: "flex",
  flex: 1,
  margin: "1%",
  padding: "1%",
  backgroundColor: "#b0a160",
  color: "#444"
};

export default Card;
