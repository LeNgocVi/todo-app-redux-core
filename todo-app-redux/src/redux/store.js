// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from "../components/Filters/FilterSlice";
import TodoSlice from "../components/TodoList/TodoSlice";

const store = configureStore({
  reducer: {
    filters: FilterSlice.reducer,
    todoList: TodoSlice.reducer,
  },
});
export default store;
