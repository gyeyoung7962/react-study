import React, { useState } from "react";

function MyComp() {
  const [val, setVal] = useState(0);
  console.log("다시 그려짐");
  return (
    //setVal(0)으로 하면 기존값과 같은 상태라 업데이트가 되지않는다
    <div>
      <button onClick={() => setVal(val + 1)}>클릭 {val}</button>
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
