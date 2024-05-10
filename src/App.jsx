import React from "react";

function App(props) {
  const a = {
    name: "John",
    age: 44,
    address: {
      street: "lorem Ipsum",
      city: "seoul",
    },
  };

  //얕은복사(shallow copy)
  const { ...b } = a;
  b.age = 55;
  console.log("a.age", a.age);
  console.log("b.age", b.age);
  b.address.city = "busan"; //참조값 변경으로  a와b가 같은곳을 나타냄
  console.log("a.address.city", a.address.city);
  console.log("b.address.city", b.address.city);

  //깊은복사 (deep copy)

  return <div></div>;
}

export default App;
