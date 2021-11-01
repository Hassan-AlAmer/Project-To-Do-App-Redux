import React, {useState, useEffect} from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { addTask, updateTask } from "../actions/taskActions";


function TaskForm({type, handleCancelUpdate, indexUpdate, titlteUpdate}) {            
    const [task, setTask] = useState('');    
    const dispatch=useDispatch();

    useEffect(() => {
        setTask(titlteUpdate)
      },[titlteUpdate]);

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
            if(type===0){
                const newTask = { taskTitle:task, isComplite:false };
                dispatch(addTask(newTask));
            }else{
                dispatch(updateTask(indexUpdate, task));
                handleCancelUpdate();
            }
            setTask('');
        }
    }

    return (
        
        <Row>
            <Col>
                <Form onSubmit={handleSubmit} noValidate>
                    <Row>
                        <Form.Group as={Col} className="d-flex">
                            <Form.Control type="text" id="taskInput" placeholder="Enter New Task" value={task} onChange={(e) => setTask(e.target.value)}/>
                            <Button type="submit" className="ms-3">{type===0 ? "Add" : "Update"}</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default TaskForm;
