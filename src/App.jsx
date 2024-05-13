import React from "react";

function MyComp({ name, age, children }) {
  console.log(children);
  return (
    <div>
      {name},{age}, {children}
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp name={"son"} age={33}>
        {/*content는 children prop*/}
        <p>Lorem ipsum dolor.</p>
      </MyComp>

      <MyComp name={"lee"} age={22}>
        <ul>
          <li>Lorem.</li>
          <li>Quo?</li>
        </ul>
      </MyComp>
    </div>
  );
}

export default App;
