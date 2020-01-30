import React from "react";

const Card = props => {
  return <div style={{ ...cardStyle, ...props.style }}>{props.children}</div>;
};

const cardStyle = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  margin: "1%",
  padding: "1%",
  justifyContent: "center",
  backgroundColor: "#bbb",
  color: "#444"
};

export default Card;
