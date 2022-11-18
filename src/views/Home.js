import { Outlet } from "react-router-dom";
import Container from "../UI/Container";

const Home = () => {
  return (
    <div>
      <Container width="medium-container">
        <Outlet />
      </Container>
    </div>
  );
};

export default Home;
