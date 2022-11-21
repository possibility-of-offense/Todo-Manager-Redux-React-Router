import classes from "./Navigation.module.css";
import logo from "./adwords.png";
import { useNavigate } from "react-router-dom";
import SearchInput from "../Search/SearchInput";

const Navigation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <nav className={classes.nav}>
      <ul>
        <li onClick={() => navigate("/")}>
          <div className="flex flex-align-items-center">
            <img src={logo} alt="Logo" title="Logo" />
            &nbsp;
            <h2 className="m-none">Todo App</h2>
          </div>
        </li>
        <li>
          <button onClick={handleClick} className="btn">
            See all todos
          </button>
        </li>
        <li className="ml-autoIMP">
          <SearchInput />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
