import DoingContainer from "../components/TodosContainers/Doing/DoingContainer";
import DoneContainer from "../components/TodosContainers/Done/DoneContainer";
import TodoContainer from "../components/TodosContainers/ToDo/TodoContainer";
import Container from "../UI/Container";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes["main-window"]}>
      <Container width="medium-container">
        <TodoContainer />
        <DoingContainer />
        <DoneContainer />
      </Container>
    </div>
  );
};

export default Home;
