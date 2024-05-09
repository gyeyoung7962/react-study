function App() {
  const myTag = <h1>hello</h1>;
  const val1 = "흥민";
  const val2 = 3.14;
  const val3 = 456;
  const val4 = true;
  const val5 = false;
  const val6 = null;
  const val7 = undefined;
  const val8 = [2, 3];
  const val9 = { age: 3, name: "강인" };

  //const, let중에 사용
  //const : 우선적으로 사용
  //let :값의 변경이 필요한경우

  // {} :jsx 내에서 javascript 코드 사용

  return (
    <>
      <div>{val1}</div>
      <div>{myTag}</div>
      <div>{val2}</div>
      <div>{val3}</div>
      {/* boolean, null, undifined 은 출력 안됨*/}
      <div>{val4}</div>
      <div>{val5}</div>
      <div>{val6}</div>
      <div>{val7}</div>
      <div>{val8}</div>
      <div>{val9.age}</div>
      <div>{val9.name}</div>
    </>
  );
}

export default App;
