import React from "react";

const Cell = props => {
  return <div style={{ ...cellStyle, ...props.style }}>{props.children}</div>;
};

const cellStyle = {
  flexDirection: "row",
  margin: "1%",
  padding: "1%",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px black",
  backgroundColor: "white",
  color: "#444"
};

export default Cell;
