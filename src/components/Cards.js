import { Card, Button, Col } from "react-bootstrap";
const Cards = ({ todos, onDelete, onFinish }) => {
  if (todos.length === 0) {
    return <Col className="text-center">Loading all todolist...</Col>;
  }
  return (
    <>
      {todos.map((todo) => {
        return (
          <Col key={todo.id} xs={12} md={6} xl={4} className="p-1">
            <Card>
              <Card.Body
                className={
                  todo.finished === true
                    ? "border rounded-3 border-primary"
                    : ""
                }
              >
                <Card.Title className="text-md">{todo.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-sm text-muted">
                  {todo.author}
                </Card.Subtitle>
                <Card.Text>{todo.description}</Card.Text>
                <Button
                  className="btn-sm rounded"
                  variant={todo.finished ? "primary" : "outline-primary"}
                  onClick={() => {
                    todo.finished
                      ? alert("Todo already finished")
                      : onFinish(todo.id);
                  }}
                >
                  {todo.finished ? "Finished" : "Set Finished"}
                </Button>
                <Button
                  variant="outline-success"
                  className="btn-sm rounded mx-1"
                >
                  Edit
                </Button>
                <Button
                  className="btn-sm rounded"
                  variant="outline-danger"
                  onClick={() => {
                    onDelete(todo.id);
                  }}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default Cards;
