import classes from "./AlertTopFixed.module.css";

const AlertTopFixed = (props) => {
  return <div className={classes.alert}>{props.children}</div>;
};

export default AlertTopFixed;
