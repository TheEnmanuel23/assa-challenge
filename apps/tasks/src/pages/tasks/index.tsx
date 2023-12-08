import { Layout } from "../../shared/layout";
import { useTasks } from "../../lib/hooks";
import { AddTask } from "./add-tasks";

function Tasks() {
  const tasks = useTasks();

  return (
    <Layout title="Tasks" action={<AddTask />}>
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
