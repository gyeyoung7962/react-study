import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BoardAdd } from "./BoardAdd.jsx";

function BoardEdit() {
  return <div>게시물 수정 페이지</div>;
}

function BoardList() {
  return <div>게시물 목록 페이지</div>;
}

//router 객체
const router = createBrowserRouter([
  {
    path: "/add",
    element: <BoardAdd />,
  },
  { path: "/edit", element: <BoardEdit /> },
  { path: "/list", element: <BoardList /> },
  { path: "/board/write", element: <div>게시물 작성하기</div> },
  { path: "/board/edit", element: <div>게시물 수정하기</div> },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
