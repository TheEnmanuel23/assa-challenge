import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routers } from "./routers.tsx";

const router = createBrowserRouter(routers);

export const App = () => {
  return <RouterProvider router={router} />;
};
