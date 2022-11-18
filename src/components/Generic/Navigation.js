import classes from "./Navigation.module.css";
import logo from "./adwords.png";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className={classes.nav}>
      <ul>
        <li onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" title="Logo" />
        </li>
        <li>
          <button>To be Add</button>
        </li>
        <li>
          <button>To be Add</button>
        </li>
        <li>
          <button>To be Add</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
