import React from "react";

const Header = props => {
  return (
    <div style={headerStyle}>
      <h1 style={{...titleStyle, ...props.style}}>{props.title}</h1>
    </div>
  );
};

const headerStyle = {
  width: "100%",
  height: 80,
  paddingTop: 30,
  color: "white",
  backgroundColor: "grey",
  alignItems: "center",
  justifyContent: "center"
};
const titleStyle = {
  fontSize: 24
};

export default Header;
