import classes from "./Card.module.css";

const Card = ({ type, className, children }) => {
  let cardClasses = className ? className : "";

  if (type === "light-gray") {
    cardClasses += ` box-shadow-1 ${classes["light-gray"]}`;
  } else if (type === "white") {
    cardClasses += ` box-shadow-2 ${classes["white"]}`;
  }

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
