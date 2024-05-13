import React from "react";
//default export는 아무 이름으로 import할 수 있음
import val, { v1 } from "./MyValues.jsx";
import someVal from "./MyComps.jsx";

function App(props) {
  return (
    <div>
      <div>
        <div>
          {v1},{val}
        </div>
        <div>{someVal}</div>
      </div>
    </div>
  );
}

export default App;
