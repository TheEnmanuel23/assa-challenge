import { describe, expect, test } from "vitest";
import { addTask, tasksReducer } from "../src/features/tasks-slice";

describe("tasksSlice", () => {
  const initialState = { entities: ["task 1", "task 2"] };

  test(`should add a task when the ${addTask}`, () => {
    const task = "task 3";
    const action = addTask(task);
    const newState = tasksReducer(initialState, action);

    expect(newState.entities).toEqual([...initialState.entities, task]);
  });
});
