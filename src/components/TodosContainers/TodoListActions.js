import classes from "./TodoListActions.module.css";

import { ContainerPopupCallbacks } from "../../context/ContainerPopupCallbacks";
import { useContext, useState } from "react";
import TodoChangePriority from "./TodoChangePriority";

const TodoListActions = ({ handleClosePopup }) => {
  const handleLiClick = (reducer = null) => {
    if (reducer) {
      reducer.cb();
    }
    handleClosePopup(false);
  };

  const handleDisableClicking = (e) => {
    if (!callbacksContext || callbacksContext.selectTodosLength.length === 0) {
      e.stopPropagation();
    }
  };

  const callbacksContext = useContext(ContainerPopupCallbacks);

  const [changeTodoPriority, setChangeTodoPriority] = useState(false);

  return (
    <ul
      onClick={handleDisableClicking}
      className={`${
        callbacksContext?.selectTodosLength &&
        callbacksContext.selectTodosLength > 0
          ? ""
          : classes["disable-lis"]
      } ${classes["list-actions__ul"]}`}
    >
      <li className={classes["list-item__section--heading"]}>
        <div className="flex flex-justify-content-center">
          <span>List actions</span>
          <span
            title="Close popup"
            onClick={() => handleClosePopup(false)}
            className={`${classes["close-button"]} box-shadow-2`}
          >
            &times;
          </span>
        </div>
      </li>
      <li
        onClick={handleLiClick.bind(null, {
          cb: () => callbacksContext.handleSorting("SORT_BY_TITLE_ASC"),
        })}
      >
        Sort By Title in Ascending Order
      </li>
      <li
        onClick={handleLiClick.bind(null, {
          cb: () => callbacksContext.handleSorting("SORT_BY_TITLE_DESC"),
        })}
      >
        Sort By Title in Descending Order
      </li>
      <li
        onClick={handleLiClick.bind(null, {
          cb: () => callbacksContext.handleRemoveAllTodos(),
        })}
      >
        Delete All
      </li>
      <li onClick={() => setChangeTodoPriority((prev) => !prev)}>
        Change Priority
        {changeTodoPriority && (
          <TodoChangePriority
            onClosePopup={handleClosePopup}
            todosLen={callbacksContext.selectTodosLength}
          />
        )}
      </li>
    </ul>
  );
};

export default TodoListActions;
