import { Fragment } from "react";
import DoingContainer from "../../components/TodosContainers/Doing/DoingContainer";
import DoneContainer from "../../components/TodosContainers/Done/DoneContainer";
import TodoContainer from "../../components/TodosContainers/ToDo/TodoContainer";

const TodoBoxes = () => {
  return (
    <Fragment>
      <TodoContainer />
      <DoingContainer />
      <DoneContainer />
    </Fragment>
  );
};

export default TodoBoxes;
