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

  function handleClick3() {
    axios.get("/api/main43/sub3").then((resp) => console.log(resp));
  }

  function handleClick4() {
    axios.get("/api/main43/sub4").then((resp) => console.log(resp.data));
  }

  function handleClick5() {
    axios.get("/api/main43/sub5").then((resp) => console.log(resp.data));
  }

  function handleClick6() {
    axios.get("/api/main43/sub6").then((resp) => console.log(resp.data));
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
      <br />
      <button onClick={handleClick2}>응답 받기2</button>
      <br />
      <p>{result}</p>
      <button onClick={handleClick3}>응답 받기3</button>
      <br />
      <button onClick={handleClick4}>응답 받기4</button>
      <br />
      <button onClick={handleClick5}>응답 받기5</button>
      <br />
      <button onClick={handleClick6}>응답 받기6</button>
    </div>
  );
}

export default App;
