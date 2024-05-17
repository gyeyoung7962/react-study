import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function Root() {
  return (
    <div>
      <div>
        <Link to={"/"}>home</Link>
        <Link to={"list"}>list</Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

function BoardList() {
  return (
    <div>
      <div>1번 게시물 보기</div>
      <div>2번 게시물 보기</div>
      <div>3번 게시물 보기</div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <div>main page</div> },
      {
        path: "board",
        element: <div>board page</div>,
      },
      {
        path: "list",
        element: <BoardList />,
      },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
