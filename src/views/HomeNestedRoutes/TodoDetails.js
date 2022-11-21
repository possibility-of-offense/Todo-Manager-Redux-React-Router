import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import title from "./title.png";
import meta from "./meta.png";
import classes from "./TodoDetails.module.css";
import { useRef, useState } from "react";
import useDetectOutsideClick from "../../hooks/useDeteckOutsideClick";
import { getTodoById, updateTodo } from "../../features/todosSlice";
import { formatCategory } from "../../helpers/format-category";

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
  // Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateState();
  };

  let captureName = todo.name;

  const updateState = () => {
    const updatedTodo = {
      ...todo,
      name: nameInput ? nameInput : todo.name,
      content: descriptionInput ? descriptionInput : todo.content,
    };

    dispatch(
      updateTodo({
        category,
        id: todo.id,
        todo: updatedTodo,
      })
    );
    navigate("/", {
      state: {
        status: "redirect-from-todo-details",
        name: `"${captureName}" was updated!`,
      },
    });
  };

  const formRef = useRef(null);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateState();
    }
  };

  const handleTitleFocus = (e) => {
    setShowSpanInfo(true);
    setHideSpanInfoInitially(false);
  };

  const handleDescriptionFocus = (e) => {
    setShowDescription(true);
    setShowSpanInfo(false);
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
                  onChange={(e) => setNameInput(e.target.value)}
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
                  onChange={(e) => setDescriptionInput(e.target.value)}
                  value={descriptionInput}
                ></textarea>
                {showDescription && (
                  <div className={classes.buttons}>
                    <button type="submit" className="btn">
                      Save
                    </button>{" "}
                    &nbsp;
                    <button className="btn">Close</button>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default TodoDetails;
