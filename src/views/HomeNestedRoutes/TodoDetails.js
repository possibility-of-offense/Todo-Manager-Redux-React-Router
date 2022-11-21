import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import title from "./title.png";
import meta from "./meta.png";
import del from "./delete.png";

import classes from "./TodoDetails.module.css";
import { useContext, useRef, useState } from "react";
import useDetectOutsideClick from "../../hooks/useDeteckOutsideClick";
import {
  deleteTodo,
  getTodoById,
  moveTodoToAnotherCategory,
  updateTodo,
} from "../../features/todosSlice";
import { formatCategory } from "../../helpers/format-category";
import TodoPriorityToggler from "../../components/Todos/TodoPriorityToggler";
import TodoChangeCategory from "../../components/Todos/TodoChangeCategory";
import { ContextInfo } from "../../App";

const TodoDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { detail } = useParams();

  const [showDescription, setShowDescription] = useState(false);
  const selectTodo = useSelector((state) => getTodoById(state, detail));
  const { todo, category } = selectTodo;

  const [hideSpanInfoInitially, setHideSpanInfoInitially] = useState(true);
  const [showSpanInfo, setShowSpanInfo] = useState(false);

  const divRef = useRef(null);

  const fn = function (e) {
    if (divRef.current && !divRef.current.contains(e.target)) {
      setShowDescription(false);
    }
  };
  useDetectOutsideClick(divRef, fn);

  const [nameInput, setNameInput] = useState(todo.name);
  const [descriptionInput, setDescriptionInput] = useState(todo.content);
  const [prioritySwitcher, setPrioritySwitcher] = useState(todo.priority);
  const [todoCategory, setTodoCategory] = useState(null);

  const [nothingChange, setNothingChanged] = useState(true);

  const contextInfo = useContext(ContextInfo);
  // Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
    if (nothingChange) return;

    updateState();
  };

  let captureName = todo.name;

  const updateState = () => {
    const updatedTodo = {
      ...todo,
      name: nameInput ? nameInput : todo.name,
      content: descriptionInput ? descriptionInput : todo.content,
      priority: prioritySwitcher,
    };
    if (todoCategory === null) {
      dispatch(
        updateTodo({
          category,
          id: todo.id,
          todo: updatedTodo,
        })
      );
    } else {
      let formattedCat = todoCategory.split(" ").join("").toLowerCase();
      formattedCat = formattedCat === "todo" ? "todos" : formattedCat;

      dispatch(
        moveTodoToAnotherCategory({
          oldCategory: category,
          newCategory: formattedCat,
          todo: updatedTodo,
        })
      );
    }

    contextInfo.setShowAlert(true);
    contextInfo.setAlertContent(`${captureName} was updated!`);
    navigate("/");
  };

  const formRef = useRef(null);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateState();
    }
  };

  const handleTitleChange = (e) => {
    setNameInput(e.target.value);
    setNothingChanged(false);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionInput(e.target.value);
    setNothingChanged(false);
  };

  const handleTitleFocus = (e) => {
    setShowSpanInfo(true);
    setHideSpanInfoInitially(false);
  };

  const handleDescriptionFocus = (e) => {
    setShowDescription(true);
    setShowSpanInfo(false);
  };

  const handleCloseDescription = (e) => {
    setShowDescription(false);
  };

  const handleDeleteTodo = (id, e) => {
    if (id) {
      dispatch(deleteTodo({ category, id }));
      navigate("/");
    }
  };

  if (Object.keys(selectTodo).length === 0) {
    return (
      <div className="overlay">
        <div className="modal">
          <button className={classes["go-back"]} onClick={() => navigate(-1)}>
            Go back
          </button>
          <h2 className="text-center">No Todo Found!</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="overlay">
        <div className="modal">
          <div>
            <button className={classes["go-back"]} onClick={() => navigate(-1)}>
              Go back
            </button>
            <div
              onClick={handleDeleteTodo.bind(null, todo.id)}
              className={classes["delete"]}
            >
              <img alt="Delete" title="Delete" src={del} />
            </div>
            {!hideSpanInfoInitially && (
              <span
                className={`${classes["span-info"]} ${
                  showSpanInfo
                    ? classes["show-span-info"]
                    : classes["hide-span-info"]
                }`}
              >
                Press Enter if you want to save only the title changes
              </span>
            )}
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="submit" hidden />

            <h1 className={`${classes.heading}`}>
              <label htmlFor="details__title" className="cursor-pointer">
                <img alt={todo.name} title={todo.name} src={title} />
                <span className="d-none">{todo.name}</span>
              </label>
              <div className="position-relative">
                <textarea
                  className="cursor-pointer"
                  placeholder={todo.name}
                  name="title"
                  id="details__title"
                  onKeyDown={handleKeyDown}
                  onChange={handleTitleChange}
                  onFocus={handleTitleFocus}
                  value={nameInput}
                ></textarea>
                <span className={classes["heading__title--in-list"]}>
                  in list <span>{formatCategory(category)}</span>
                </span>
              </div>
            </h1>

            <div className={classes.description} ref={divRef}>
              <label htmlFor="details__description" className="cursor-pointer">
                <div className="flex flex-align-items-center">
                  <img alt={todo.content} title={todo.content} src={meta} />
                  <span className="d-none">{todo.content}</span>
                  <p className="cursor-pointer">Description</p>
                </div>
              </label>
              <div className={classes["description__div"]}>
                <textarea
                  placeholder={todo.content}
                  name="description"
                  id="details__description"
                  className={`${
                    showDescription
                      ? classes["show-textarea-description"]
                      : undefined
                  } cursor-pointer`}
                  onFocus={handleDescriptionFocus}
                  onChange={handleDescriptionChange}
                  value={descriptionInput}
                ></textarea>
                {showDescription && (
                  <div className={classes.buttons}>
                    <button type="submit" className="btn">
                      Save
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn"
                      onClick={handleCloseDescription}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>

            <TodoPriorityToggler
              prioritySwitcher={prioritySwitcher}
              setPrioritySwitcher={setPrioritySwitcher}
              setNothingChanged={setNothingChanged}
            />

            <TodoChangeCategory
              setTodoCategory={setTodoCategory}
              category={category}
              setNothingChanged={setNothingChanged}
            />

            {!showDescription && (
              <div className="flex flex-justify-content-end">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
};

export default TodoDetails;
