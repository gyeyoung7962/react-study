import React from "react";
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

  return (
    <div>
      <button onClick={handleClick1}>요청(json데이터 포함)</button>
    </div>
  );
}

export default App;
