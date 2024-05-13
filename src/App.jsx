import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleClick() {
    const [...nextList] = list; //새로운 객체에 값 복사
    nextList.push(text); //새로운 객체에 입력한 값을 넣고
    setList(nextList); // list에 그 객체를 셋하기
    setText("");
  }

  return (
    <div>
      <input
        value={text}
        type={"text"}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>추가</button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
