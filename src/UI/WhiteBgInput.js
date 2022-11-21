import classes from "./WhiteBgInput.module.css";

const WhiteBgInput = ({
  className,
  placeholder,
  type,
  name,
  value,
  onChange,
}) => {
  return (
    <input
      className={`${className} ${classes.input} box-shadow-2`}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default WhiteBgInput;
