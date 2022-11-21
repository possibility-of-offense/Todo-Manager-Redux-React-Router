import classes from "./AlertFloatingWindow.module.css";

const AlertFloatingWindow = ({ children, position, onClick }) => {
  return (
    <div
      className={`${classes["msgbox-box"]} ${
        position === "left" ? classes["left"] : classes["right"]
      }`}
    >
      <div className={classes["msgbox-content"]}>{children}</div>
      <div className={classes["msgbox-command"]}>
        <a onClick={onClick} className={classes["msgbox-close"]} href="/">
          Close
        </a>
      </div>
    </div>
  );
};

export default AlertFloatingWindow;
