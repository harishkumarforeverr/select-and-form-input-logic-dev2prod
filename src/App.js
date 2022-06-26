import React from "react";
// import "./App.css";
import FormComponent from "./Component/FormComponent";
import ValidateSequenceNo from "./Component/ValidateSequenceNo";

function App() {
  return (
    <div className="App">
      <FormComponent />
      <ValidateSequenceNo children={["tcs", "wipro", "infosys", "jio"]} />
    </div>
  );
}

export default App;
