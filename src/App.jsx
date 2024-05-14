import React, { useState } from "react";

function MyInput({ text, onChange }) {
  return (
    <div>
      <input type="text" onChange={onChange} />
      <p>{text}</p>
    </div>
  );
}

function MyText({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

function App(props) {
  const [text, setText] = useState("");

  function handleUpdateText(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <MyInput text={text} onChange={handleUpdateText} />
      <MyText text={text} />
    </div>
  );
}

export default App;
