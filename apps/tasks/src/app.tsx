import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { routes } from "./lib/routes.tsx";
import { store } from "./lib/store.ts";

const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container max-w-md py-6 bg-white  h-screen overflow-auto">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </div>
    </div>
  );
};
