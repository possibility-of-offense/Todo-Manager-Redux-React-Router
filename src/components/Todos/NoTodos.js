import classes from "./NoTodos.module.css";

const NoTodos = ({ children }) => {
  return <p className={classes["no-todos"]}>{children}</p>;
};

export default NoTodos;
