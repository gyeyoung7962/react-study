import React from "react";

//import : 다른 파일에 있는 변수를 현재 파일에서 사용
import { value1, value2, value3, value4 } from "./MyValues.jsx";

function App(props) {
  return (
    <div>
      {value1},{value2},{value3}, {value4.team}
    </div>
  );
}

export default App;
