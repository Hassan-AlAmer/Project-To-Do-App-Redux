
import {Container,Row, Col } from 'react-bootstrap'
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg={8}>
            <Row className="mb-3">
              <Col><h1 className="text-center">To-Do App</h1></Col>
            </Row>
            <Row className="mb-3">
              <Col><TaskForm/></Col>
            </Row>
            <Row className="mb-3">
              <Col><Tasks/></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
