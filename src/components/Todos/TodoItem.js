import classes from "./TodoItem.module.css";

import Card from "../../UI/Card";
import { shortenContent } from "../../helpers/shorten-content";
import { Fragment } from "react";
import TodoPriority from "./TodoPriority";
import { useNavigate } from "react-router-dom";

const TodoItem = ({ todo }) => {
  let contentObj = null;
  if (todo.content.split(" ").length >= 5) {
    contentObj = shortenContent(todo.content);
  }

  function ShortenDots() {
    if (!contentObj) {
      return <Fragment>{todo.content}</Fragment>;
    } else {
      if (contentObj && contentObj.dotLast) {
        return <Fragment>{contentObj.content.slice(0, -1)} &hellip;</Fragment>;
      }
      return <Fragment>{contentObj.content} &hellip;</Fragment>;
    }
  }

  const navigate = useNavigate();
  const handleNavigate = () => {
    console.log(5);
    navigate("/details/4");
  };

  return (
    <Card key={todo.id} type="white" className="mb-0-8">
      <div className="flex flex-justify-space-between" onClick={handleNavigate}>
        <h3 className={classes["todo-item__heading"]}>{todo.name}</h3>
        <TodoPriority
          className={classes["todo-item__priority"]}
          priority={todo.priority}
        >
          {todo.priority.toUpperCase()}
        </TodoPriority>
      </div>

      <p className={classes["todo-item__content"]}>
        <ShortenDots />
      </p>
    </Card>
  );
};

export default TodoItem;
