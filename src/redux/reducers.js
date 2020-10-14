import { GET_TODO, ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "./actionTypes";

let initialState;
const existingTodoList = window.localStorage.getItem("TodoList");
if (existingTodoList) initialState = JSON.parse(existingTodoList);
else
  initialState = [
    {
      todo: "Go to Movie",
      completed: false,
      id: "10060",
    },
    {
      todo: "Charge the Phone",
      completed: true,
      id: "10500",
    },
  ];

export const mainReducer = (state = initialState, action) => {
  let TodoArr;
  switch (action.type) {
    case GET_TODO:
      return state;
    case ADD_TODO:
      TodoArr = [...state];
      TodoArr.push(action.newTodoObj);
      window.localStorage.setItem("TodoList", JSON.stringify(TodoArr));
      return TodoArr;

    case DELETE_TODO:
      TodoArr = [...state];
      const newState = TodoArr.filter((item) => item.id !== action.itemkey);
      window.localStorage.setItem("TodoList", JSON.stringify(newState));
      return newState;

    case COMPLETE_TODO:
      TodoArr = [...state];
      TodoArr.map((item) => {
        if (item.id === action.itemkey) item.completed = !item.completed;
      });
      window.localStorage.setItem("TodoList", JSON.stringify(TodoArr));
      return TodoArr;
    default:
      return state;
  }
};
