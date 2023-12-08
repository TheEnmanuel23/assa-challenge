import { Button } from "@repo/ui";
import { Layout } from "./components/layout";

function Tasks() {
  return (
    <Layout
      title="Tasks"
      action={<Button variant="secondary">Add Task</Button>}
    >
      <ul className="w-full divide-y divide-dashed">
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Task element</li>
        <li className="px-2 py-4 text-sm">Last element</li>
      </ul>
    </Layout>
  );
}

export default Tasks;
