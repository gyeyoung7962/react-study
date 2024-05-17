import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function Springroot() {
  return (
    <div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "blueviolet",
          display: "flex",
          gap: "5px",
        }}
      >
        {/*a태그 대신 Link 컴포넌트 사용*/}
        <div>
          <Link to="/spring/learn">learn</Link>
        </div>
        <div>
          <Link to="/spring/api">api</Link>
        </div>
        <div>
          <Link to="/spring/doc">doc</Link>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "spring",
    element: <Springroot />,
    children: [
      {
        path: "api",
        element: <div>api page</div>,
      },
      {
        path: "doc",
        element: <div>doc page</div>,
      },
      {
        path: "learn",
        element: <div>learn page</div>,
      },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
