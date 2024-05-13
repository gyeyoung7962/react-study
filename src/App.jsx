import React, { useState } from "react";

function MyComp() {
  const [val1, setVal1] = useState(0);
  let val2 = 0;

  //상태가 변경될때만 호출됨
  console.log("다시 호출됨");
  return (
    <div>
      <button onClick={() => setVal1(val1 + 1)}>val {val1}</button>
      <button onClick={() => val2++}>val2 {val2}</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;
