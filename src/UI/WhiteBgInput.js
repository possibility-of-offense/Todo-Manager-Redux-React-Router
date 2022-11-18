import classes from "./WhiteBgInput.module.css";

const WhiteBgInput = ({ className, placeholder, type, name }) => {
  return (
    <input
      className={`${className} ${classes.input} box-shadow-2`}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
};

export default WhiteBgInput;
