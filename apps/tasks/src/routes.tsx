import Home from "./pages/home";
import List from "./pages/list";
import Tasks from "./pages/tasks";

export const routes = [
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
];
