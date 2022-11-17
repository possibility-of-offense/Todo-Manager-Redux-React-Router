import { useContext, useEffect } from "react";
import { ContainerPopupCallbacks } from "../../context/ContainerPopupCallbacks";
import classes from "./TodoContainerPopup.module.css";

const TodoContainerPopup = ({ popupRef, handleClosePopup }) => {
  const handleLiClick = (reducer = null) => {
    if (reducer) {
      reducer.cb();
    }
    handleClosePopup(false);
  };

  const handleDisableClicking = (e) => {
    if (!callbacksContext || callbacksContext.getTodosLength.length === 0) {
      e.stopPropagation();
    }
  };

  useEffect(() => {
    const rect = popupRef.current.getBoundingClientRect();
    if (window.innerWidth - rect.x < 300) {
      // prettier-ignore
      popupRef.current.style.left = `-${300 - (window.innerWidth - rect.x)}px`;
    }
  }, [popupRef]);

  const callbacksContext = useContext(ContainerPopupCallbacks);

  return (
    <section ref={popupRef} className={`${classes.popup} popup-box-shadow`}>
      <ul
        onClick={handleDisableClicking}
        className={
          callbacksContext?.getTodosLength &&
          callbacksContext.getTodosLength > 0
            ? ""
            : classes["disable-lis"]
        }
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
      </ul>
    </section>
  );
};

export default TodoContainerPopup;
