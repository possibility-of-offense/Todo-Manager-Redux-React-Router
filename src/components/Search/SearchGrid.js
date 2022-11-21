import { useNavigate } from "react-router-dom";
import Card from "../../UI/Card";
import Container from "../../UI/Container";

const SearchGrid = ({ foundItems }) => {
  const navigate = useNavigate();

  const handleShowDetails = (id, e) => {
    e.preventDefault();
    console.log(id);
    navigate("/details/" + id);
  };

  return (
    <Container width="medium-container">
      {foundItems.length > 0 &&
        foundItems.map((el) => (
          <Card key={el.id} type="white" className="text-center">
            <h2>
              <a
                href={`/details/${el.id}`}
                className="anchor-link-styling"
                onClick={handleShowDetails.bind(null, el.id)}
              >
                {el.name}
              </a>
            </h2>
            <p>{el.content}</p>
          </Card>
        ))}
    </Container>
  );
};

export default SearchGrid;
