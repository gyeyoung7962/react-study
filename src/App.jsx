import React from "react";
import axios from "axios";

function App(props) {
  function handleClick200() {
    axios.get("/api/main44/sub1").then((resp) => console.log("200응답"));
  }

  function handleClick400() {
    axios
      .get("/api/main44/sub2")
      .then((resp) => console.log("400응답"))
      .catch(() => console.log("catch의 메소드 400응답"));
  }

  function handleClick404() {
    axios
      .get("/api/main44/sub5")
      .then((resp) => console.log("404응답"))
      .catch(() => console.log("catch메소드 404 응답"));
  }

  function handleClick500() {
    axios
      .get("api/main44/sub6")
      .then((resp) => console.log("500응답"))
      .catch(() => console.log("catch메소드 500 응답"));
  }

  return (
    <div>
      <button onClick={handleClick200}>200응답</button>
      <button onClick={handleClick400}>400응답</button>
      <button onClick={handleClick404}>404응답</button>
      <button onClick={handleClick500}>500응답</button>
    </div>
  );
}

export default App;
