import { Fragment } from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, isDone }) => {
  return (
    <Fragment>
      {Object.values(todos).map((todo) => (
        <TodoItem key={todo.id} todo={todo} isDone={isDone} />
      ))}
    </Fragment>
  );
};

export default Todos;
