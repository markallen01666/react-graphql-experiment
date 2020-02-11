import React, { useState } from "react";

import Cell from "./Cell";
import Picker from "./Picker";

const Card = props => {
  const [queryTool, setqueryTool] = useState("none");
  const [results, setResults] = useState({
    awareness: 0,
    interest: 0,
    satisfaction: 0,
    participants: 0
  });

  const toolChangedHandler = toolName => {
    setqueryTool(toolName);
    setResults({
      awareness: props.results[toolName].awareness,
      interest: props.results[toolName].interest,
      satisfaction: props.results[toolName].satisfaction,
      participants: props.results[toolName].total
    });
    console.log(`Tool changed to: ${toolName}`);
    console.log(results.awareness);
  };

  return (
    <div style={{ ...cardStyle, ...props.style }}>
      <Cell style={{ flex: "1" }}>
        <Picker changeTool={toolChangedHandler} value={queryTool} />
      </Cell>
      <Cell style={{ flex: "2" }}>Awareness: {results.awareness}%</Cell>
      <Cell style={{ flex: "2" }}>Interest: {results.interest}%</Cell>
      <Cell style={{ flex: "2" }}>Satisfaction: {results.satisfaction}%</Cell>
      <Cell style={{ flex: "2" }}>Participants: {results.participants}</Cell>
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
