import { Fragment } from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos }) => {
  return (
    <Fragment>
      {Object.values(todos).map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Fragment>
  );
};

export default Todos;
