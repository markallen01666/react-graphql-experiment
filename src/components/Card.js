import React from "react";

const Card = props => {
  return <div style={{ ...cardStyle, ...props.style }}>{props.children}</div>;
};

const cardStyle = {
  flex: 1,
  margin: "5%",
  padding: "1%",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px black",
  backgroundColor: "white",
  color: "#444"
};

export default Card;
