import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Generic/Navigation";
import Home from "./views/Home";
import TodoBoxes from "./views/HomeNestedRoutes/TodoBoxes";
import TodoDetails from "./views/HomeNestedRoutes/TodoDetails";

function App() {
  return (
    <Fragment>
      <Navigation />
      <br />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<TodoBoxes />} />
          <Route path="details/:detail" element={<TodoDetails />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
