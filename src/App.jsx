import React from "react";

function App(props) {
  //object({},[])
  const a = [6, 7, 8];
  const [x, y, z] = a;
  console.log("x", x);
  console.log("y", y);
  console.log("z", z);

  //나머지 모두(...변수명)
  const [s, ...t] = a;

  console.log("s", s);
  console.log("t", t);
  console.log("t[0]", t[0]);
  console.log("t[1]", t[1]);

  //나머지 모두로 배열 복사

  const c = a; //참조값 복사
  const [...b] = a; //각 원소를 새 배열에 복사

  c[0] = 66;
  console.log("c[0]", c[0]);
  console.log("a[0]", a[0]);
  console.log("b[0]", b[0]);

  console.log("b", b);

  return <div></div>;
}

export default App;
