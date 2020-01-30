import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Text from "./components/Text";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="GraphQl test" />
      <Card>
        <Text>
          This tool allows you to explore some of the results from the State of
          JS survey
        </Text>
      </Card>
    </div>
  );
}

export default App;
