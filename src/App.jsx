import React from "react";

function App(props) {
  //function: 함수

  //1. 이름 있는 함수
  function action1(param1, param2) {
    //명령문

    return 2;
  }

  //2. 이름 없는 함수
  const v = function (param1, param2) {
    return 99;
  };

  //3. arrow function(화살표 함수)
  //3.1 파라미터가 여러 개, 명령문이 여러 개

  const a = (param1, param2, param3) => {
    //명령문
    //명령문
  };

  //3.2 파라미터가 없고 명령문이 여러 개
  const b = () => {
    //명령문
  };

  //3.3 파라미터가 한 개, 명령문이 여러 개
  //파라미터가 한 개일 때 () 안써도 됨
  const c = (param1) => {
    //명령문
  };

  const d = (param1) => {
    //명령문
  };

  //3.4 명령문이 하나 일 때 중괄호 생략
  const e = () => {
    console.log("명령문이 하나인 arrow function");
  };

  const f = () => console.log("중괄호 생략 가능");

  const g = () => "중괄호 생략시 값이 리턴됨";

  const h = () => {
    return "중괄호 생략시 값이 리턴됨";
  };

  //함수 실행
  action1(null, null);
  v(null, null);
  a(null, null, null);

  return <div></div>;
}

export default App;
