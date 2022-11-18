import classes from "./Popup.module.css";

const Popup = ({ popupRef, children }) => {
  return (
    <div ref={popupRef} className={`${classes.popup} popup-box-shadow`}>
      {children}
    </div>
  );
};

export default Popup;
