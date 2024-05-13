import React from "react";
import { ArrowComp, MyComp, YourComp } from "./MyComps.jsx";

function App(props) {
  return (
    <div>
      <div>
        <MyComp />
      </div>
      <div>
        <YourComp />
      </div>
      <div>
        <ArrowComp />
      </div>
    </div>
  );
}

export default App;
