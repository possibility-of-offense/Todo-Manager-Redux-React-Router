import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AlertTopFixed from "../UI/AlertTopFixed";
import Container from "../UI/Container";

const Home = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");

  useEffect(() => {
    let timer;
    if (
      location.state &&
      location.state.status === "redirect-from-todo-details" &&
      !showAlert
    ) {
      setShowAlert(true);
      setAlertContent(location.state.name);

      timer = setTimeout(() => {
        setShowAlert(false);
        setAlertContent("");
        navigate("/");
      }, 2000);
    }

    return () => {
      if (showAlert) {
        clearTimeout(timer);
      }
    };
  }, [location.state, showAlert, navigate]);

  return (
    <div>
      <Container width="medium-container">
        {showAlert && <AlertTopFixed>{alertContent}</AlertTopFixed>}
        <Outlet />
      </Container>
    </div>
  );
};

export default Home;
