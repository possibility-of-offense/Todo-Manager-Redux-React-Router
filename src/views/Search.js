import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SearchGrid from "../components/Search/SearchGrid";
import Card from "../UI/Card";
import Container from "../UI/Container";

const Search = () => {
  const location = useLocation();
  let queryValue = undefined;

  if (location.search) {
    const parseQuery = location.search.slice(1).split("=");
    queryValue = parseQuery[1];
  }

  const selectTodos = useSelector((state) => {
    const allTodos = Object.values(state.todos);
    let found = [];

    for (let todo of allTodos) {
      const todoItemValues = Object.values(todo);

      for (let content of todoItemValues) {
        if (
          content.name.toLowerCase().includes(queryValue) ||
          content.content.toLowerCase().includes(queryValue)
        ) {
          found.push(content);
        }
      }
    }

    return found;
  });

  return (
    <Fragment>
      {selectTodos.length > 0 && (
        <h1 className="text-center font-weight-normal">Search</h1>
      )}
      <Container width="medium-container" cols="grid-cols-1">
        {selectTodos.length === 0 ? (
          <Card type="white">
            <h1 className="text-center font-weight-normal">
              Nothing was found!
            </h1>
          </Card>
        ) : (
          <Card type="light-gray">
            <SearchGrid foundItems={selectTodos}></SearchGrid>
          </Card>
        )}
      </Container>
    </Fragment>
  );
};

export default Search;
