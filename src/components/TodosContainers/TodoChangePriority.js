import { Fragment, useContext, useRef, useState } from "react";
import { ContainerPopupCallbacks } from "../../context/ContainerPopupCallbacks";
import ButtonSwitcher from "../../UI/ButtonSwitcher";
import classes from "./TodoChangePriority.module.css";
import TodoSelectPriorityOfTodo from "./TodoSelectPriorityOfTodo";

const TodoChangePriority = ({ onClosePopup }) => {
  const callbacksContext = useContext(ContainerPopupCallbacks);

  // All
  const [changeAll, setChangeAll] = useState("high");
  const [showButtonSwitcherForAll, setShowButtonSwitcherForAll] =
    useState(false);

  // Specific
  const [changeSpecific, setChangeSpecific] = useState({
    select: Object.values(callbacksContext.selectTodos)[0].id,
    priority: "high",
  });
  const [showButtonSwitcherForSpecific, setShowButtonSwitcherForSpecific] =
    useState(false);

  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleRadioButtonClick = (e) => {
    const { target } = e;

    if (target.value === "all") {
      setShowButtonSwitcherForAll(true);
      setShowButtonSwitcherForSpecific(false);
    } else {
      setShowButtonSwitcherForAll(false);
      setShowButtonSwitcherForSpecific(true);
    }
  };

  const handleChangePriority = (e) => {
    e.preventDefault();

    if (showButtonSwitcherForAll) {
      callbacksContext.handleChangePriority(changeAll);
    } else {
      if (!changeSpecific.select || changeSpecific.priority === undefined)
        return;

      callbacksContext.handleChangePrioritySpecificTodo({
        id: changeSpecific.select,
        priority: changeSpecific.priority,
      });

      setChangeSpecific({
        select: Object.values(callbacksContext.selectTodos)[0].name,
        priority: undefined,
      });
    }

    onClosePopup(false);
  };

  return (
    <form
      className={classes.form}
      onClick={handleStopPropagation}
      onSubmit={handleChangePriority}
    >
      <div
        id="change-priority__form"
        className="flex flex-justify-space-between"
      >
        <div className={classes["form-group"]}>
          <input
            type="radio"
            name="priority"
            value="all"
            id="change-all__todo-priority"
            onClick={handleRadioButtonClick}
          />{" "}
          <label
            className="user-select-none cursor-pointer"
            htmlFor="change-all__todo-priority"
          >
            Change of all
          </label>
        </div>
        <div className={classes["form-group"]}>
          <input
            type="radio"
            name="priority"
            value="pick-one"
            id="change-specific__todo-priority"
            onClick={handleRadioButtonClick}
          />{" "}
          <label
            className="user-select-none cursor-pointer"
            htmlFor="change-specific__todo-priority"
          >
            Change priority of specific todo
          </label>
        </div>
      </div>

      {showButtonSwitcherForAll && (
        <Fragment>
          <br />
          <ButtonSwitcher changeAll={changeAll} setChangeAll={setChangeAll} />
          <div className={classes["button-container"]}>
            <button type="submit">Set</button>
          </div>
        </Fragment>
      )}

      {showButtonSwitcherForSpecific && (
        <Fragment>
          <TodoSelectPriorityOfTodo
            changeSpecific={changeSpecific}
            setChangeSpecific={setChangeSpecific}
            btnClass={classes["button-container"]}
          />
        </Fragment>
      )}
    </form>
  );
};

export default TodoChangePriority;
