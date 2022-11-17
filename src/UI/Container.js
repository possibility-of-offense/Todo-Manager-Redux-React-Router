import classes from "./Container.module.css";

const Container = ({ width, children }) => {
  const widthClass = width || "medium-container";

  return (
    <div className={`${classes[widthClass]} ${classes.container}`}>
      {children}
    </div>
  );
};

export default Container;
