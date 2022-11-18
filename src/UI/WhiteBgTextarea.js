import classes from "./WhiteBgTextarea.module.css";

const WhiteBgTextarea = ({ name, placeholder, className }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={`${classes.textarea} ${className} box-shadow-2`}
    ></textarea>
  );
};

export default WhiteBgTextarea;
