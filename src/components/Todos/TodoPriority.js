import classes from "./TodoPriority.module.css";

const TodoPriority = ({ className, priority, children }) => {
  let priorityClass = className;
  let capitalize = priority[0].toUpperCase() + priority.slice(1);

  if (priority === "high") {
    priorityClass += ` ${classes["high-priority"]}`;
  } else if (priority === "low") {
    priorityClass += ` ${classes["low-priority"]}`;
  } else {
    priorityClass += ` ${classes["high-priority"]}`;
  }

  return (
    <span title={`${capitalize} Priority!`} className={priorityClass}>
      {children}
    </span>
  );
};

export default TodoPriority;
