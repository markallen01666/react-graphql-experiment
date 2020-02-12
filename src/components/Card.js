import React from "react";

import Cell from "./Cell";
import Picker from "./Picker";

const Card = props => {
  return (
    <div style={{ ...cardStyle, ...props.style }}>
      <Cell style={{ flex: "1" }}>
        <Picker changeTool={props.changeHandler}  cardId={props.id} />
      </Cell>
      <Cell style={{ flex: "2" }}>
        Awareness: {props.results[props.id].awareness}%
      </Cell>
      <Cell style={{ flex: "2" }}>
        Interest: {props.results[props.id].interest}%
      </Cell>
      <Cell style={{ flex: "2" }}>
        Satisfaction: {props.results[props.id].satisfaction}%
      </Cell>
      <Cell style={{ flex: "2" }}>
        Participants: {props.results[props.id].total}
      </Cell>
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
