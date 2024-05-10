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
  //얕은 복사를 여러번 해서 해결
  const { ...c } = a; //얕은복사
  const { ...address1 } = a.address; //얕은복사
  c.address = address1;
  c.address.city = "london";

  console.log("a.address.city", a.address.city);
  console.log("c.address.city", c.address.city);

  const d = {
    company: {
      name: "apple",
      location: "us",
    },
    name: "iphone",
    price: 300,
  };

  //코드작성 : d객체를 e객체로 깊은복사
  const { ...e } = d;
  const { ...company1 } = d.company;
  e.company = company1;

  e.name = "galaxy";
  e.company.name = "samsung";

  console.log("d.name", d.name);
  console.log("d.company.name", d.company.name);
  console.log("e.name", e.name);
  console.log("e.company.name", e.company.name);

  return <div></div>;
}

export default App;
