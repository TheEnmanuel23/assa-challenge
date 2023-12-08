import { Layout } from "../../shared/layout";
import { useAppSelector } from "../../lib/hooks";
import { selectTasks } from "../../features/tasks-slice";
import { AddTask } from "./add-tasks";

function Tasks() {
  const tasks = useAppSelector(selectTasks);
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
