import { Fragment } from "react";
import classes from "./ButtonSwitcher.module.css";

const ButtonSwitcher = ({ changeAll, setChangeAll }) => {
  const handleCheckboxChange = () => {
    if (changeAll === "high") {
      setChangeAll("low");
    } else {
      setChangeAll("high");
    }
  };

  return (
    <Fragment>
      <span className={classes["values"]}>High</span>
      <label className={classes["switch"]}>
        <input
          type="checkbox"
          value={changeAll}
          onChange={handleCheckboxChange}
        />
        <span className={`${classes["slider"]} ${classes["round"]}`}></span>
      </label>
      <span className={classes["values"]}>Low</span>
    </Fragment>
  );
};

export default ButtonSwitcher;
