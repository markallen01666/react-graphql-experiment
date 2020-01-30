import React from "react";
import Card from "./components/Card";
import Cell from "./components/Cell";
import Header from "./components/Header";
import Text from "./components/Text";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="GraphQl test" />
      <Card style={{backgroundColor: "white"}}>
        <Text>
          This uses GraphQl to access some of the results from the State of
          JS survey and summarises them
        </Text>
      </Card>
      <Card>
        <Cell style={{width: "40%"}}>lslslslsl</Cell>
        <Cell style={{width: "20%"}}></Cell>
        <Cell style={{width: "20%"}}></Cell>
        <Cell style={{width: "20%"}}></Cell>
      </Card>
      <Card>
        <Cell style={{width: "40%"}}>lslslslsl</Cell>
        <Cell style={{width: "20%"}}></Cell>
        <Cell style={{width: "20%"}}></Cell>
        <Cell style={{width: "20%"}}></Cell>
      </Card>
      <Card>
        <Cell style={{width: "40%"}}>lslslslsl</Cell>
        <Cell style={{width: "20%"}}></Cell>
        <Cell style={{width: "20%"}}></Cell>
        <Cell style={{width: "20%"}}></Cell>
      </Card>
    </div>
  );
}

export default App;
