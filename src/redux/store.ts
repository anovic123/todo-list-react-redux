import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import todo from './slices/todoSlice';

export const store = configureStore({
  reducer: {
    todo
  }
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()