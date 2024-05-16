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

  function handleMove200() {
    axios
      .get("/api/main44/sub1")
      .then((resp) => console.log(resp))
      .catch((error) => {
        if (error.response.status === 401) {
          console.log("잘못된 경로입니다 401");
        } else if (error.response.status === 403) {
          console.log("잘못된 경로입니다 403");
        }
      });
  }

  function handleMove401() {
    axios
      .get("/api/main44/sub3")
      .then((resp) => console.log(resp))
      .catch((error) => {
        if (error.response.status === 401) {
          console.log("잘못된 경로입니다 401");
        }
      });
  }

  function handleMove403() {
    axios
      .get("/api/main44/sub4")
      .then((resp) => console.log(resp))
      .catch((error) => {
        if (error.response.status === 403) {
          console.log("잘못된 경로입니다 403");
        }
      });
  }

  function handle999() {
    const r = Math.random();
    let path = "";
    if (r < 1 / 3) {
      path = "/api/main43/sub1";
    } else if (r < 2 / 3) {
      path = "/api/main43/sub3";
    } else {
      path = "/api/main43/sub4";
    }
    axios
      .get(path)
      .then(() => {
        console.log("잘 됨 ");
      })
      .catch((error) => {
        const code = error.response.status;

        switch (code) {
          case 401:
            console.log("401 응답 입니다. 로그인되지 않았습니다.");
            break;
          case 403:
            console.log("403 응답 입니다. 권한이 없습니다.");
            break;
        }
      });
  }

  return (
    <div>
      <button onClick={handle200}>200응답</button>
      <button onClick={handle400}>400응답</button>
      <button onClick={handle500}>500응답</button>

      <button onClick={handleMove200}>응답 코드에 따라 다른 일하기200</button>
      <button onClick={handleMove401}>응답 코드에 따라 다른 일하기401</button>
      <button onClick={handleMove403}>응답 코드에 따라 다른 일하기403</button>

      <button onClick={handle999}>응답 코드에 따라 다른 일하기403</button>
    </div>
  );
}

export default App;
