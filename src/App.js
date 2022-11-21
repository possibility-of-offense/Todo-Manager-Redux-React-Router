import React, { Fragment, useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Generic/Navigation";
import Home from "./views/Home";
import TodoBoxes from "./views/HomeNestedRoutes/TodoBoxes";
import TodoDetails from "./views/HomeNestedRoutes/TodoDetails";
import Search from "./views/Search";
import AlertTopFixed from "./UI/AlertTopFixed";

export const ContextInfo = React.createContext();

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");

  let timer = useRef(null);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setShowAlert(false);
      setAlertContent("");
    }, 4000);

    return () => {
      clearTimeout(timer.current);
    };
  }, [showAlert]);

  return (
    <Fragment>
      {showAlert && <AlertTopFixed>{alertContent}</AlertTopFixed>}
      <Navigation />

      <ContextInfo.Provider
        value={{
          showAlert,
          setShowAlert,
          alertContent,
          setAlertContent,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<TodoBoxes />} />
            <Route path="details/:detail" element={<TodoDetails />} />
          </Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </ContextInfo.Provider>
    </Fragment>
  );
}

export default App;
