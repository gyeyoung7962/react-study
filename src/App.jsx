import React, { useState } from "react";
import axios from "axios";

function App(props) {
  //변수 선언과 상태설정
  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");

  function handleSearchClick() {
    //조회 버튼 클릭시
    // /api/customer?id=6 로 요청
    axios
      .get(`/api/customer?id=${customerId}`)
      .then((response) => response.data)
      .then((data) => setCustomerName(data));
  }

  return (
    <div>
      <div>
        {/*숫자입력받는 폼 값이 입력되면 event로인해 value값을 customerId에 셋팅해준다*/}
        <input type="number" onChange={(e) => setCustomerId(e.target.value)} />
        {/*버튼 클릭시 온클릭 메서드 작동 axios로 주소요청하고 데이터를 받아온후 응답받은 data를 customerName 넣어준다*/}
        <button onClick={handleSearchClick}>조회</button>
      </div>
      <div>이름: {customerName}</div>
    </div>
  );
}

export default App;
