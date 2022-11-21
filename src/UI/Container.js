import classes from "./Container.module.css";

const Container = ({ width, cols, children }) => {
  const widthClass = width || "medium-container";
  let columns = cols ? cols : "grid-cols-3";

  return (
    <div
      className={`${classes[widthClass]} ${classes[columns]} ${classes.container}`}
    >
      {children}
    </div>
  );
};

export default Container;
