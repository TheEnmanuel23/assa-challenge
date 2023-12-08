import { Button } from "@repo/ui";
import { Layout } from "./components/layout";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function Tasks() {
  const tasks = useSelector((state: RootState) => state.tasks.entities);
  return (
    <Layout
      title="Tasks"
      action={<Button variant="secondary">Add Task</Button>}
    >
      <ul className="w-full divide-y divide-dashed">
        {tasks.map((task, index) => (
          <li key={index} className="px-2 py-4 text-sm">
            {task}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Tasks;
