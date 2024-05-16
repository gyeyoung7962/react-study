import React from "react";
import axios from "axios";

function App(props) {
  return (
    <div>
      <button onClick={() => axios.get("/api/main44/sub1")}>200 응답</button>
      <button onClick={() => axios.get("/api/main44/sub2")}>400응답</button>
      <button onClick={() => axios.get("/api/main44/sub3")}>401응답</button>
      <button onClick={() => axios.get("/api/main44/sub4")}>403응답</button>
      <button onClick={() => axios.get("/api/main44/sub5")}>404응답</button>
      <button onClick={() => axios.get("/api/main44/sub6")}>500응답</button>
    </div>
  );
}

export default App;
