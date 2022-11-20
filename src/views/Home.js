import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Alert from "../UI/Alert";
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
      }, 4000);
    } else {
      navigate("/");
    }
    return () => {
      setShowAlert(false);
      setAlertContent("");
      clearTimeout(timer);
      navigate("/");
    };
  }, [location.state, showAlert]);

  return (
    <div>
      <Container width="medium-container">
        {showAlert && <Alert>{alertContent}</Alert>}
        <Outlet />
      </Container>
    </div>
  );
};

export default Home;
