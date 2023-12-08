import { Button, ScrollArea, Separator } from "@repo/ui";
import { GoBackButton } from "./components/go-back-button";

function Tasks() {
  return (
    <div className="h-full">
      <div className="flex items-center gap-4">
        <GoBackButton />
        <h1 className="text-xl font-semibold">Tasks</h1>
      </div>
      <Separator className="mt-4" />
      <div className="flex flex-col items-center py-4 gap-6 h-[calc(100%-40px)] ">
        <Button variant="secondary">Add Task</Button>
        <ScrollArea className="h-full w-full rounded-md border">
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
        </ScrollArea>
      </div>
    </div>
  );
}

export default Tasks;
