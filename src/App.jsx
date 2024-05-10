import React from "react";

function MyComp(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.country}</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp name="son" age={33} address="seoul" />
      <MyComp city="busan" country="USA" />
    </div>
  );
}

export default App;
