// const initState = [
//   {
//     id: 1,
//     name: "vi",
//     completed: false,
//     priority: "Medium",
//   },
//   {
//     id: 2,
//     name: "pha",
//     completed: true,
//     priority: "Low",
//   },
//   {
//     id: 3,
//     name: "ki",
//     completed: false,
//     priority: "High",
//   },
// ];

// const todoListReducer = (state = initState, action) => {
//   //   console.log({ state, action });
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state.todoList, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todiList",
  initialState: [
    {
      id: 1,
      name: "vi",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "pha",
      completed: true,
      priority: "Low",
    },
    {
      id: 3,
      name: "ki",
      completed: false,
      priority: "High",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
