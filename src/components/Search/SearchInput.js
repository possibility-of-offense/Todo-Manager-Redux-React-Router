import { useState } from "react";
import AlertFloatingWindow from "../../UI/AlertFloatingWindow";
import WhiteBgInput from "../../UI/WhiteBgInput";
import classes from "./SearchInput.module.css";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchValue) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      navigate({
        pathname: "/search",
        search: "?key=" + searchValue,
      });
    }

    setSearchValue("");
  };

  const handleCloseAlert = () => {
    setShowAlert((prev) => !prev);
  };

  return (
    <form onSubmit={handleSearch}>
      {showAlert && (
        <AlertFloatingWindow onClick={handleCloseAlert}>
          The input is empty! Type something in the input field!
        </AlertFloatingWindow>
      )}
      <div className="flex">
        <WhiteBgInput
          placeholder="Search for something..."
          type="text"
          name="search"
          className={classes["search-input"]}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        &nbsp;
        <button className={`${classes["search-btn"]} btn`}>Search</button>
      </div>
    </form>
  );
};

export default SearchInput;
