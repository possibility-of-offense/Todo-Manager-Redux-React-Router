import classes from "./Alert.module.css";

const Alert = (props) => {
  return <div className={classes.alert}>{props.children}</div>;
};

export default Alert;
