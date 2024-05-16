import React from "react";
import axios from "axios";

function App(props) {
  function handle200() {
    axios.get("/api/main44/sub1").then((resp) => console.log(resp));
  }

  function handle400() {
    axios
      .get("/api/main44/sub2")
      .then((resp) => console.log(resp))
      .catch((error) => {
        if (error.response.status === 400) {
          console.log("잘 못된 요청입니다");
        } else if (error.response.status === 404) {
          console.log("존재하지 않는 요청입니다");
        } else if (error.response.status === 500) {
          console.log("서버에서 오류가 발생하였습니다");
        }
      });
  }

  function handle500() {
    axios
      .get("/api/main44/sub6")
      .then((resp) => console.log(resp))
      .catch((error) => {
        if (error.response.status === 400) {
          console.log("잘 못된 요청입니다");
        } else if (error.response.status === 404) {
          console.log("존재하지 않는 요청입니다");
        } else if (error.response.status === 500) {
          console.log("서버에서 오류가 발생하였습니다");
        }
      });
  }

  return (
    <div>
      <button onClick={handle200}>200응답</button>
      <button onClick={handle400}>400응답</button>
      <button onClick={handle500}>500응답</button>
    </div>
  );
}

export default App;
