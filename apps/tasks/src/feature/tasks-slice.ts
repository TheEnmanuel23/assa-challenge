import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TaskState = {
  entities: string[];
};

const initialState: TaskState = {
  entities: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.entities.push(action.payload);
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask } = tasksSlice.actions;
export default tasksSlice;
