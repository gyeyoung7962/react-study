import React from "react";

function MyComp({ name, age, someProp = false, otherProp }) {
  console.log("name", name);
  console.log("age", age);
  console.log("someProp", someProp);
  console.log("otherProp", otherProp);
  return <div></div>;
}
function App(props) {
  return (
    <div>
      <MyComp name={"son"} age={30} someProp otherProp={true} />
    </div>
  );
}

export default App;
