import Card from "../../../UI/Card";
import Todos from "../../Todos/Todos";
import TodoAddCardAction from "../TodoAddCardAction";
import TodoContainerHeading from "../TodoContainerHeading";
import TodoContainerPopupAction from "../TodoContainerPopupAction";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeAllTodos } from "../../../features/todosSlice";
import NoTodos from "../../Todos/NoTodos";
import { useCallback, useEffect, useMemo, useReducer } from "react";
import { ContainerPopupCallbacks } from "../../../context/ContainerPopupCallbacks";
import sortingReducer from "../../../reducers/sortingReducer";

const DoneContainer = () => {
  const dispatch = useDispatch();

  const getTodos = useSelector((state) => state.todos.done);
  const getTodosLength = Object.values(getTodos).length;

  const [sortingState, sortingDispatcher] = useReducer(sortingReducer, {
    todos: Object.values(getTodos),
  });

  useEffect(() => {
    if (Object.values(getTodos).length > 0) {
      sortingDispatcher({
        type: "FILL_TODOS",
        payload: Object.values(getTodos),
      });
    }
  }, [getTodos]);

  const handleSorting = useCallback((type) => {
    sortingDispatcher({ type });
  }, []);

  const handleAddTodo = useCallback(
    (todo) => {
      dispatch(
        addTodo({
          category: "todos",
          todo,
        })
      );
    },
    [dispatch]
  );

  const handleRemoveAllTodos = useCallback(() => {
    dispatch(removeAllTodos("todos"));
    sortingDispatcher({ type: "REMOVE_ALL" });
  }, [dispatch]);

  const callbacks = useMemo(() => {
    return {
      handleAddTodo,
      handleRemoveAllTodos,
      handleSorting,
      getTodosLength,
    };
  }, [handleAddTodo, handleRemoveAllTodos, handleSorting, getTodosLength]);

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
          <Todos todos={sortingState.todos} />
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

export default DoneContainer;
