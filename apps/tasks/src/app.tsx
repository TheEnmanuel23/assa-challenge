import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes.tsx";

const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container max-w-md py-6 bg-white  h-screen overflow-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};
