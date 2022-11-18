import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Generic/Navigation";
import Home from "./views/Home";
import TodoDetails from "./views/TodoDetails";

function App() {
  return (
    <Fragment>
      <Navigation />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:detail" element={<TodoDetails />} />
      </Routes>
    </Fragment>
  );
}

export default App;
