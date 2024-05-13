import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("");

  function handleUpdateText(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type={"text"} onChange={handleUpdateText} />
      <p>{text}</p>
    </div>
  );
}

export default App;
