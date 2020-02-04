import React, { useState } from "react";

import Cell from "./Cell";
import Picker from "./Picker";

const Card = props => {
  const [queryTool, setqueryTool] = useState("none");
  const [awareness, setAwareness] = useState(10);
  const [interest, setInterest] = useState(15);
  const [satisfaction, setSatisfaction] = useState(35);
  const [participants, setParticipants] = useState(20324);

  const toolChangedHandler = toolName => {
    console.log(`Tool changed to: ${toolName}`);
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
