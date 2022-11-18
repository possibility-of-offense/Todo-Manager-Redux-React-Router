import { useNavigate } from "react-router-dom";

const TodoDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={() => navigate(-1)}>Go back</button>
        <h1>Details - What are you doing? It's not added yet :@ :@</h1>
      </div>
    </div>
  );
};

export default TodoDetails;
