import { Fragment } from "react";
import classes from "./TodoPriorityToggler.module.css";

const TodoPriorityToggler = ({
  prioritySwitcher,
  setPrioritySwitcher,
  setNothingChanged,
}) => {
  const handlePaddleClick = () => {
    setNothingChanged(false);
    setPrioritySwitcher((prev) => (prev === "high" ? "low" : "high"));
  };

  return (
    <Fragment>
      <p className={classes["priority-title"]}>Change priority</p>
      <div onClick={handlePaddleClick} className={classes["priority-toggler"]}>
        <div
          title="Change priority"
          className={classes["priority-paddle"]}
          style={{ left: prioritySwitcher === "high" ? "40px" : "-1px" }}
        ></div>
        <div title="High" className={classes["high-priority"]}>
          High
        </div>
        <div title="Low" className={classes["low-priority"]}>
          Low
        </div>
      </div>
    </Fragment>
  );
};

export default TodoPriorityToggler;
