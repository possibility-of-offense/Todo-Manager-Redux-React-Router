import classes from "./TodoContainerHeading.module.css";

const TodoContainerHeading = ({ title }) => {
  return (
    <h4 title={title} className={classes.title}>
      {title}
    </h4>
  );
};

export default TodoContainerHeading;
