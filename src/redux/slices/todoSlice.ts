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
    checkTodo: (state, action: PayloadAction<Todo['id']>) => {
      state.todoList = state.todoList.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, checked: !todo.checked}
        }

        return todo
      })
    }
  }
})

export const { addTodo, removeTodo, checkTodo } = todoSlice.actions;
export default todoSlice.reducer;