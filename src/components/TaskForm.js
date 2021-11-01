import React, {useState} from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { addTask } from "../actions/taskActions";


function TaskForm() {
    const [task, setTask] = useState('');
    const dispatch=useDispatch();

    const validation = () => {
    
        if (!task ) {
          return false;
        } else {
          return true;
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();        

        if(validation()===true){
            const newTask = { taskTitle:task, isComplite:false };
            dispatch(addTask(newTask));
            setTask('');
        }
    }

    return (
        <Row>
            <Col>
                <Form onSubmit={handleSubmit} noValidate>
                    <Row>
                        <Form.Group as={Col} className="d-flex">
                            <Form.Control type="text" placeholder="Enter New Task" value={task} onChange={(e) => setTask(e.target.value)}/>
                            <Button type="submit" className="ms-3">Add</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default TaskForm;
