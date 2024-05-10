import React from "react";

function App(props) {
  //나머지 모두 문법으로 객체 복사

  const a = {
    name: "son",
    age: 33,
    city: "london",
  };
  const b = a;
  b.age = 44;

  console.log("a.age", a.age);
  console.log("b.age", b.age);

  const c = {
    name: a.name,
    age: a.age,
    city: a.city,
  };

  c.age = 55;
  console.log("a.age", a.age);
  console.log("c.age", c.age);

  const { ...d } = a;
  d.age = 66;

  console.log("a.age", a.age);
  console.log("d.age", d.age);

  //연습
  const e = {
    name: "lee",
    country: "korea",
    team: "paris",
    salary: 700,
    city: "seoul",
  };

  const { ...f } = e;

  //코드작성
  e.city = "busan";
  console.log(e);

  console.log(f);

  return <div></div>;
}

export default App;
