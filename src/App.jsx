import React from "react";
import axios from "axios";

function App(props) {
  //json 데이터 타입
  function handleClick1() {
    const data = {
      name: "son",
      age: 33,
      married: false,
      team: {
        location: "london",
        name: "토트넘",
      },
      item: ["phone", "shoes", "shirts"],
      address: null,
    };
    axios.post("/api/main42/sub5", data);
  }

  function handleClick2() {
    axios.post("/api/main42/sub6", {
      name: "son",
      age: 33,
    });
  }

  function handleClick3() {
    axios.post("/api/main42/sub7", {
      name: "옥수수",
      age: 10,
    });
  }

  //문자열, 수, 불리언, 객체, 배열, null
  return (
    <div>
      <button onClick={handleClick1}>json 데이터와 요청</button>
      <br />
      <button onClick={handleClick2}>json 데이터를 요청2</button>
      <br />
      <button onClick={handleClick3}>json 데이터와 요청3</button>
    </div>
  );
}

export default App;
