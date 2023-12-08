import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routers } from "./routes.tsx";

const router = createBrowserRouter(routers);

export const App = () => {
  return <RouterProvider router={router} />;
};
