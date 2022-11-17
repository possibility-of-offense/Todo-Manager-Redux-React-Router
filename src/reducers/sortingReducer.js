const sortingReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_TITLE_ASC":
      return {
        ...state,
        todos: state.todos.slice().sort((a, b) => a.name.localeCompare(b.name)),
      };
    case "SORT_BY_TITLE_DESC":
      return {
        ...state,
        todos: state.todos.slice().sort((a, b) => b.name.localeCompare(a.name)),
      };
    case "REMOVE_ALL":
      return {
        ...state,
        todos: [],
      };
    case "FILL_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default sortingReducer;
