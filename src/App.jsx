import React, { useState } from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    // axios.get("/api/main43/sub1").then(() => {});
    axios.get("/api/main43/sub1").then((param) => console.log(param.data));
  }

  const [result, setResult] = useState("");

  function handleClick2() {
    axios.get("/api/main43/sub2").then((param) => setResult(param.data));
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
      <br />
      <button onClick={handleClick2}>응답 받기2</button>
      <br />
      <p>{result}</p>
    </div>
  );
}

export default App;
