import React, { useState } from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    const obj1 = {
      name: "son",
      age: 44,
    };
    // const json = JSON.stringify(obj1);  axios가 post보낼때 두번재 파라미터가 객체면 직렬화를 해주므로 안해줘도 상관없음
    axios.post("/api/main42/sub1", obj1);
  }

  function handleClick2() {
    const obj = {
      name: "라이언자켓",
      price: 500,
    };

    axios.post("/api/main42/sub2", obj);
  }

  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  function handleClick3() {
    // 같을경우 생략가능
    // const data = {
    //   name: name,
    //   city: city,
    // };

    const data = {
      name: name,
      city: city,
    };
    axios.post("/api/main42/sub3", data);
  }

  return (
    <div>
      <button onClick={handleClick1}>요청(json데이터 포함)</button>
      <button onClick={handleClick2}>요청2(json데이터 포함)</button>

      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <br />
        <button onClick={handleClick3}>요청(input에 입력한 값)</button>
      </div>
    </div>
  );
}

export default App;
