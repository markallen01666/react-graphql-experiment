import React, { useState } from "react";

import Cell from "./Cell";
import Picker from "./Picker";

const Card = props => {
  const [queryTool, setQueryTool] = useState([props.id, "none"]);
  
  const toolChangedHandler = toolName => {
    setQueryTool([props.id, toolName])
    props.changeHandler(queryTool);
    console.log(`Tool changed to: ${queryTool}`);
  };

  return (
    <div style={{ ...cardStyle, ...props.style }}>
      <Cell style={{ flex: "1" }}>
        <Picker changeTool={toolChangedHandler} value={queryTool} />
      </Cell>
      <Cell style={{ flex: "2" }}>Awareness: {props.results[props.id].awareness}%</Cell>
      <Cell style={{ flex: "2" }}>Interest: {props.results[props.id].interest}%</Cell>
      <Cell style={{ flex: "2" }}>Satisfaction: {props.results[props.id].satisfaction}%</Cell>
      <Cell style={{ flex: "2" }}>Participants: {props.results.participants}</Cell>
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
