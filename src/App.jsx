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

  function handleClickButton5() {
    const param = new URLSearchParams();
    param.append("id", 3);
    param.append("name", "son");
    axios.get(`/api/someurl3?${param}`);
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get요청</button>
      <button onClick={handleClickButton2}>post요청</button>

      <button onClick={handleClickButton3}>get요청2</button>
      <button onClick={handleClickButton4}>post요청2</button>
      <button onClick={handleClickButton5}>get요청 with query string</button>
    </div>
  );
}

export default App;
