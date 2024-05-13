import React from "react";

//import : 다른 파일에 있는 변수를 현재 파일에서 사용
//다른 파일의 ㅂ같은 변수를 import 할때 as로 다른 별칭을 줄 수 있음
import { value1, value2, value3 as v3, value4 } from "./MyValues.jsx";
import { myAddress, myStr, value3 as vv3 } from "./MyComps.jsx";

function App(props) {
  return (
    <div>
      {value1},{value2},{v3}, {value4.team}
      <div>
        {myStr},{myAddress},{vv3}
      </div>
    </div>
  );
}

export default App;
