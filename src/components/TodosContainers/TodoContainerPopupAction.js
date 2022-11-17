import TodoContainerPopup from "./TodoContainerPopup";
import classes from "./TodoContainerPopupAction.module.css";

import { useRef, useState } from "react";
import useDetectOutsideClick from "../../hooks/useDeteckOutsideClick";

const TodoContainerPopupAction = () => {
  const [showPopup, setShowPopup] = useState(false);

  const popupRef = useRef(null);
  const dotsRef = useRef(null);

  const fn = function (e) {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };

  useDetectOutsideClick(popupRef, fn);

  const handlePopupVisibility = (e) => {
    e.stopPropagation();

    if (showPopup) {
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div className={classes["popup-wrapper"]}>
      <div
        ref={dotsRef}
        onMouseDown={handlePopupVisibility}
        className={`popup-dots cursor-pointer ${classes["hover-popup"]} user-select-none`}
      >
        &bull;&bull;&bull;
      </div>
      {showPopup && (
        <TodoContainerPopup
          popupRef={popupRef}
          handleClosePopup={setShowPopup}
        />
      )}
    </div>
  );
};

export default TodoContainerPopupAction;
