import React from "react";
import axios from "axios";

function App(props) {
  function handleClickButton1() {
    //ajax get요청
    axios.get("/api/someurl");
  }

  function handleClickButton2() {
    axios.post("/api/someurl");
  }

  function handleClickButton3() {
    axios.get("/api/someurl2");
  }

  function handleClickButton4() {
    axios.post("/api/someurl2");
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get요청</button>
      <button onClick={handleClickButton2}>post요청</button>

      <button onClick={handleClickButton3}>get요청2</button>
      <button onClick={handleClickButton4}>post요청2</button>
    </div>
  );
}

export default App;
