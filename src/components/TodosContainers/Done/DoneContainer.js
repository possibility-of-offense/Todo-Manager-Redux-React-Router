import Card from "../../../UI/Card";
import Todos from "../../Todos/Todos";
import TodoAddCardAction from "../TodoAddCardAction";
import TodoContainerHeading from "../TodoContainerHeading";
import TodoContainerPopupAction from "../TodoContainerPopupAction";

import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  changeAllPriority,
  changeSpecificTodoPriority,
  removeAllTodos,
} from "../../../features/todosSlice";
import NoTodos from "../../Todos/NoTodos";
import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import { ContainerPopupCallbacks } from "../../../context/ContainerPopupCallbacks";
import sortingReducer from "../../../reducers/sortingReducer";

const TodoContainer = () => {
  const dispatch = useDispatch();

  const selectTodos = useSelector((state) => state.todos.done);
  const selectTodosLength = Object.values(selectTodos).length;

  const [sortingState, sortingDispatcher] = useReducer(sortingReducer, {
    todos: Object.values(selectTodos),
  });

  useEffect(() => {
    if (Object.values(selectTodos).length > 0) {
      sortingDispatcher({
        type: "FILL_TODOS",
        payload: Object.values(selectTodos),
      });
    }
  }, [selectTodos]);

  const handleSorting = useCallback((type) => {
    sortingDispatcher({ type });
  }, []);

  const handleAddTodo = useCallback(
    (todo) => {
      dispatch(
        addTodo({
          category: "done",
          todo,
        })
      );
    },
    [dispatch]
  );

  const handleRemoveAllTodos = useCallback(() => {
    dispatch(removeAllTodos("done"));
    sortingDispatcher({ type: "REMOVE_ALL" });
  }, [dispatch]);

  const handleChangePriority = useCallback(
    (priority) => {
      dispatch(changeAllPriority({ category: "done", priority }));
    },
    [dispatch]
  );

  const handleChangePrioritySpecificTodo = useCallback(
    ({ id, priority }) => {
      dispatch(changeSpecificTodoPriority({ category: "done", id, priority }));
    },
    [dispatch]
  );

  const callbacks = useMemo(() => {
    return {
      handleAddTodo,
      handleRemoveAllTodos,
      handleSorting,
      handleChangePriority,
      handleChangePrioritySpecificTodo,
      selectTodos,
      selectTodosLength,
    };
  }, [
    handleAddTodo,
    handleRemoveAllTodos,
    handleSorting,
    handleChangePriority,
    handleChangePrioritySpecificTodo,
    selectTodos,
    selectTodosLength,
  ]);

  return (
    <Card type="light-gray" className="flex flex-direction-column">
      <ContainerPopupCallbacks.Provider value={callbacks}>
        <div className="flex flex-justify-space-between mb-0-8">
          <TodoContainerHeading title="Done" />
          <TodoContainerPopupAction
            handleSorting={handleSorting}
            handleRemoveAllTodos={handleRemoveAllTodos}
          />
        </div>
        {sortingState.todos.length > 0 ? (
          <Todos todos={sortingState.todos} isDone="true" />
        ) : (
          <NoTodos>
            No todos in the <strong>Done</strong> section
          </NoTodos>
        )}
        <TodoAddCardAction handleAddTodo={handleAddTodo} />
      </ContainerPopupCallbacks.Provider>
    </Card>
  );
};

export default TodoContainer;
