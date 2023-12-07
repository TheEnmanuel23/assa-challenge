import Home from "./home";
import List from "./list";
import Tasks from "./tasks";

export const routers = [
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
