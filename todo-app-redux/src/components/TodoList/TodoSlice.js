const initState = [
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
];

const todoListReducer = (state = initState, action) => {
  //   console.log({ state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return [...state.todoList, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};

export default todoListReducer;
