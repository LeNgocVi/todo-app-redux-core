// const initState = {
//   filters: {
//     search: "",
//     status: "All",
//     priority: [],
//   },
//   todoList: [
//     {
//       id: 1,
//       name: "vi",
//       completed: false,
//       priority: "Medium",
//     },
//     {
//       id: 2,
//       name: "pha",
//       completed: false,
//       priority: "Low",
//     },
//     {
//       id: 3,
//       name: "ki",
//       completed: false,
//       priority: "High",
//     },
//   ],
// };

// const rootReducer = (state = initState, action) => {
//   console.log({ state, action });
//   switch (action.type) {
//     case "todoList/addTodo":
//       return {
//         ...state,
//         todoList: [...state.todoList, action.payload],
//       };
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         filters: { ...state.filters, search: action.payload },
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;

import { combineReducers } from "redux";
import filterReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/TodoList/TodoSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };
const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});
export default rootReducer;
