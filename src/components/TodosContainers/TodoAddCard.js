import { nanoid } from "@reduxjs/toolkit";
import { Fragment } from "react";
import classes from "./TodoAddCard.module.css";

const TodoAddCard = ({ onCloseTodo, handleAddTodo }) => {
  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    const { target } = e;

    const formData = new FormData(e.target);
    const todo = Object.fromEntries(formData.entries());
    handleAddTodo({
      id: nanoid(),
      name: todo["name"],
      content: todo["content"],
      priority: "high",
      tags: [],
    });

    target.reset();
    onCloseTodo(false);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmitAddTodo} className={classes["form-add-todo"]}>
        <input
          className={`${classes.input} box-shadow-2`}
          placeholder="Add Name"
          type="text"
          name="name"
        />
        <textarea
          name="content"
          placeholder="Add Content"
          className={`${classes.textarea} box-shadow-2`}
        ></textarea>
        <div className="flex flex-align-items-center">
          <button className={classes.button}>Add Todo</button>
          <span onClick={() => onCloseTodo(false)} className={classes.close}>
            &times;
          </span>
        </div>
      </form>
    </Fragment>
  );
};

export default TodoAddCard;
