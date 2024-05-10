import React from "react";

function App(props) {
  //style props

  return (
    <div>
      <div
        style={{
          color: "blue",
          padding: "10px",
          border: "2px dotted green",
          textAlign: "center", //lowCamelCase
          backgroundColor: "aqua",
        }}
      >
        Lorem ipsum dolor.
      </div>
    </div>
  );
}

export default App;
