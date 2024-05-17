import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function Springroot() {
  return (
    <div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "blueviolet",
        }}
      >
        상단 navbar
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
