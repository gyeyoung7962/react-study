import React from "react";

function App(props) {
  return (
    <div>
      <button
        onClick={() => console.lop("click")}
        onMouseEnter={() => console.log("mouse enter")}
        onMouseLeave={() => console.log("mouse leave")}
      >
        클릭1
      </button>
      <input type={"text"} onChange={() => console.log("change")} />
    </div>
  );
}

export default App;
