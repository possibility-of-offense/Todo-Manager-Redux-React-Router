import { useEffect } from "react";
import Popup from "../../UI/Popup";
import TodoListActions from "./TodoListActions";

const TodoContainerPopup = ({ popupRef, handleClosePopup }) => {
  useEffect(() => {
    const rect = popupRef.current.getBoundingClientRect();
    if (window.innerWidth - rect.x < 300) {
      // prettier-ignore
      popupRef.current.style.left = `-${300 - (window.innerWidth - rect.x)}px`;
    }
  }, [popupRef]);

  return (
    <Popup popupRef={popupRef}>
      <TodoListActions handleClosePopup={handleClosePopup} />
    </Popup>
  );
};

export default TodoContainerPopup;
