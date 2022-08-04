import { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import axios from "axios";
import ModalAddTodo from "./components/ModalAddTodo";
import Cards from "./components/Cards";
import LoadingModal from "./components/LoadingModal";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  const getTodos = () => {
    fetch("http://eu4.ip6to4.com:3001/api/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.todos);
      });
  };
  useEffect(() => {
    getTodos();
  }, []);

  const submitTodo = (formInput) => {
    setShowLoading(true);
    const { author, title, description } = formInput;
    axios
      .post("http://eu4.ip6to4.com:3001/api/todos", {
        author,
        title,
        description,
      })
      .then(() => {
        getTodos();
        setShowLoading(false);
      })
      .catch(() => alert("failed to add todo.."));
  };

  const onDelete = (id) => {
    setShowLoading(true);
    axios
      .delete(`http://eu4.ip6to4.com:3001/api/todos/${id}`)
      .then(() => {
        getTodos();
        setShowLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const setFinished = (id) => {
    setShowLoading(true);
    axios
      .patch(`http://eu4.ip6to4.com:3001/api/todos/${id}`)
      .then(() => {
        getTodos();
        setShowLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container className="mt-5 justify-content-center">
      <Col className="text-center">
        <LoadingModal show={showLoading} />
      </Col>
      <Col xs={12} md={10} xl={10} className="wrapper mx-auto">
        <Row>
          <h2 className="text-center my-4">Todolist App</h2>
        </Row>
        <Row>
          <Col xs md xl={3} className="text-center mx-auto">
            <ModalAddTodo onSubmit={submitTodo} />
          </Col>
        </Row>
        <Row className="p-2">
          <Cards
            todos={todos}
            onAddTodo={submitTodo}
            onDelete={onDelete}
            onFinish={setFinished}
          />
        </Row>
      </Col>
    </Container>
  );
};

export default App;
