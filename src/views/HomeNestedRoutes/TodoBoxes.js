import { Fragment } from "react";
import DoingContainer from "../../components/TodosContainers/Doing/DoingContainer";
import DoneContainer from "../../components/TodosContainers/Done/DoneContainer";
import TodoContainer from "../../components/TodosContainers/ToDo/TodoContainer";

const TodoBoxes = () => {
  return (
    <Fragment>
      <h1
        className="text-center font-weight-normal"
        style={{ gridColumn: "1 / -1" }}
      >
        Todos
      </h1>

      <TodoContainer />
      <DoingContainer />
      <DoneContainer />
    </Fragment>
  );
};

export default TodoBoxes;
