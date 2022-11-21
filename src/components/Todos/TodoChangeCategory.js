import { useState } from "react";
import { formatLeftOverCategories } from "../../helpers/format-category";
import classes from "./TodoChangeCategory.module.css";

const TodoChangeCategory = ({
  category,
  setTodoCategory,
  setNothingChanged,
}) => {
  const categories = formatLeftOverCategories(category);
  const [selected, setSelected] = useState(null);

  const handleClick = (cat, e) => {
    setNothingChanged(false);
    setSelected(cat);
    setTodoCategory(cat);
  };

  return (
    <div>
      <p className={classes["change-category__title"]}>Put todo in: </p>
      <div className={classes["categories"]}>
        <div
          className={selected === categories[0] ? classes["selected"] : ""}
          onClick={handleClick.bind(null, categories[0])}
        >
          {categories[0]}
        </div>
        <div
          className={selected === categories[1] ? classes["selected"] : ""}
          onClick={handleClick.bind(null, categories[1])}
        >
          {categories[1]}
        </div>
      </div>
    </div>
  );
};

export default TodoChangeCategory;
