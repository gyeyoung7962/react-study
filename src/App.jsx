import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    // axios.get("/api/main43/sub1").then(() => {});
    axios.get("/api/main43/sub1").then((param) => console.log(param.data));
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
    </div>
  );
}

export default App;
