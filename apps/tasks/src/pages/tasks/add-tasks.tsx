import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Input,
} from "@repo/ui";
import { useAppDispatch } from "../../lib/hooks";
import { addTask } from "../../features/tasks-slice";
import { useState } from "react";

export function AddTask() {
  const [task, setTask] = useState("");
  const dispatch = useAppDispatch();

  const handleAddTask = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!task) {
      e.preventDefault();
      return;
    }

    dispatch(addTask(task));
    setTask("");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Tasks</AlertDialogTitle>
        </AlertDialogHeader>
        <Input
          placeholder="your task!"
          onChange={(e) => setTask(e.target.value)}
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleAddTask}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
