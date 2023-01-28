import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./types";

interface TodoSliceState {
  todoList: Todo[];
}

const initialState: TodoSliceState = {
  todoList: [],
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todoList.push(action.payload)
    },
    removeTodo: (state, action: PayloadAction<Todo['id']>) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      )
    },

  }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;