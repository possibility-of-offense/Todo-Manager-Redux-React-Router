import { Fragment, useState } from "react";
import TodoAddCard from "./TodoAddCard";
import classes from "./TodoAddCardAction.module.css";

const TodoAddCardAction = ({ handleAddTodo }) => {
  const [showAddTodo, setShowAddTodo] = useState(false);

  const handleShowAddTodo = () => {
    setShowAddTodo((prev) => !prev);
  };

  return (
    <Fragment>
      <div className="flex flex-justify-space-between mt-auto">
        {!showAddTodo ? (
          <div
            onClick={handleShowAddTodo}
            className={`${classes["add-todo__text"]} cursor-pointer`}
          >
            &#43; Add Todo
          </div>
        ) : (
          <TodoAddCard
            onCloseTodo={setShowAddTodo}
            handleAddTodo={handleAddTodo}
          />
        )}
      </div>
    </Fragment>
  );
};

export default TodoAddCardAction;
