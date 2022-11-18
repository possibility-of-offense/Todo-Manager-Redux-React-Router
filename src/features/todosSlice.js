import { createSlice } from "@reduxjs/toolkit";

const handleAddition = (state, payload, cb) => {
  const { category, todo } = payload;
  const { id } = todo;

  if (!state[category].hasOwnProperty(id)) {
    cb(category, id, todo);
  }
};

const handleRemoval = (state, payload, cb) => {
  const { category, todo } = payload;
  const { id } = todo;

  if (state[category].hasOwnProperty(id)) {
    cb(category, id, todo);
  }
};

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: {
      "todo-1": {
        id: "todo-1",
        name: "Learn React Router",
        content:
          "Learn React Router! Learn React Router! Learn React Router! Learn React Router!",
        priority: "high",
        tags: ["test"],
      },
      "todo-2": {
        id: "todo-2",
        name: "Build Something awesome",
        content:
          "Build Something awesome! Build Something awesome! Build Something awesome!",
        priority: "low",
        tags: ["test"],
      },
      "todo-3": {
        id: "todo-3",
        name: "Walk the dog",
        content: "Walk the dog! Walk the dog! Walk the dog!",
        priority: "high",
        tags: ["test"],
      },
    },
    doing: {},
    done: {},
  },
  reducers: {
    addTodo(state, action) {
      handleAddition(state, action.payload, (category, id, todo) => {
        state[category][id] = todo;
      });
    },
    removeTodo(state, action) {
      handleRemoval(state, action.payload, (category, id) => {
        delete state[category][id];
      });
    },
    removeAllTodos(state, action) {
      const category = action.payload;
      state[category] = {};
    },
    changeAllPriority(state, action) {
      const { category, priority } = action.payload;

      state[category] = Object.fromEntries(
        Object.entries(state[category]).map((el) => {
          return [
            el[0],
            {
              ...el[1],
              priority,
            },
          ];
        })
      );
    },
    changeSpecificTodoPriority(state, action) {
      const { category, id, priority } = action.payload;

      console.log(id, priority);

      if (state[category][id]) {
        state[category][id] = {
          ...state[category][id],
          priority,
        };
      }
    },
  },
});

export const {
  addTodo,
  removeTodo,
  removeAllTodos,
  changeAllPriority,
  changeSpecificTodoPriority,
} = todosSlice.actions;

export default todosSlice.reducer;
