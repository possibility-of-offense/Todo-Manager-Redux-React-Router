import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Generic/Navigation";
import Home from "./views/Home";
import TodoBoxes from "./views/HomeNestedRoutes/TodoBoxes";
import TodoDetails from "./views/HomeNestedRoutes/TodoDetails";
import Search from "./views/Search";

function App() {
  return (
    <Fragment>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<TodoBoxes />} />
          <Route path="details/:detail" element={<TodoDetails />} />
        </Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
