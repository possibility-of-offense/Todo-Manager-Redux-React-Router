import { useContext } from "react";
import { ContainerPopupCallbacks } from "../../context/ContainerPopupCallbacks";

import classes from "./TodoSelectPriorityOfTodo.module.css";

const TodoSelectPriorityOfTodo = ({
  btnClass,
  changeSpecific,
  setChangeSpecific,
}) => {
  const callbacksContext = useContext(ContainerPopupCallbacks);

  const handleChangeSpecific = (e) => {
    setChangeSpecific((prev) => {
      return {
        ...prev,
        select: e.target.value,
      };
    });
  };

  const handleRadioButtonChange = (e) => {
    setChangeSpecific((prev) => {
      return {
        ...prev,
        priority: e.target.value,
      };
    });
  };

  return (
    <div className={classes["select-wrapper"]}>
      <select
        className={classes.select}
        value={changeSpecific.select}
        onChange={handleChangeSpecific}
      >
        {Object.values(callbacksContext.selectTodos).map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
      <div className="flex mt-0-5">
        <div className={classes["form-group"]}>
          <label className="user-select-none" htmlFor="set-priority-high">
            {" "}
            <input
              type="radio"
              name="specific"
              value="high"
              id="set-priority-high"
              onClick={handleRadioButtonChange}
              defaultChecked
            />{" "}
            High
          </label>
        </div>
        <div className={classes["form-group"]}>
          <label className="user-select-none" htmlFor="set-priority-low">
            {" "}
            <input
              type="radio"
              name="specific"
              value="low"
              id="set-priority-low"
              onClick={handleRadioButtonChange}
            />{" "}
            Low
          </label>
        </div>
      </div>
      <div className={btnClass}>
        <button type="submit">Set</button>
      </div>
    </div>
  );
};

export default TodoSelectPriorityOfTodo;
