import React from "react";
import ReactDOM from "react-dom/client";
import "@repo/tailwind-config/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home.tsx";
import Tasks from "./tasks.tsx";
import List from "./list.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
