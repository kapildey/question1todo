import { GET_TODO, ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "./actionTypes";

export const getTodo = () => ({
  type: GET_TODO,
});

export const addTodo = (newTodoObj) => ({
  type: ADD_TODO,
  newTodoObj: newTodoObj,
});

export const deleteTodo = (itemkey) => ({
  type: DELETE_TODO,
  itemkey: itemkey,
});

export const completeTodo = (itemkey) => ({
  type: COMPLETE_TODO,
  itemkey: itemkey,
});
