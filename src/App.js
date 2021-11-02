
import React,{useState} from 'react'
import {Container,Row, Col } from 'react-bootstrap'
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
function App() {
  const [formType,setFromType]=useState(0);
  const [indexUpdate,setindexUpdate]=useState('');
  const [titlteUpdate,settitlteUpdate]=useState('');
  

  const handleUpdate =(i,task)=>{
    document.getElementById("taskInput").value=task;
    setFromType(1);
    setindexUpdate(i);
    settitlteUpdate(task);

}
const handleCancelUpdate=()=>{
  setFromType(0);
}
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center mt-2">
          <Col lg={8}>
            <Row className="mb-3">
              <Col><h1 className="app-title text-center p-4 rounded-3 shadow-sm text-white">To-Do App</h1></Col>
            </Row>
            <Row className="mb-3">
              <Col><TaskForm type={formType} handleCancelUpdate={handleCancelUpdate} indexUpdate={indexUpdate} titlteUpdate={titlteUpdate}/></Col>
            </Row>
            <Row className="mb-3">
              <Col><Tasks handleUpdate={handleUpdate} handleCancelUpdate={handleCancelUpdate}/></Col>
            </Row>
            <Row>
              <Col><p className="fs-5 mb-0 text-center">Done by <a href="https://github.com/Hassan-AlAmer" className="link-info" target="_blank" rel="noreferrer">Hassan AlAmer</a></p></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
