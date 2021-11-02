import React from 'react'
import {Row, Col, Button} from 'react-bootstrap';
import { compliteTask } from "../actions/taskActions";
import {useDispatch} from 'react-redux'

function TaskList({tasks, handleDelete, handleUpdate}) {
    const dispatch=useDispatch();


    const handleChange =(e,i)=>{
        dispatch(compliteTask(e.target.checked,i));
    }
    const MainhandleUpdate=(i,task)=>{        
        handleUpdate(i,task);
        
    }
    return (
        <Col>
            <ul className="tasks-list">
                {tasks.length !== 0 && tasks.map((task,i)=>(
                    <li key={i} className={"bg-white p-3 rounded-3 shadow-sm mb-3 " + (task.isComplite===false ? "box-title-red" : "box-title-grean")}>
                        <Row>
                            <Col className="align-middle p-2" lg={9}><input type="checkbox" checked={task.isComplite} className="form-check-input me-2" onChange={(e)=> handleChange(e,i)}/><span className={ "fw-bold "+ (task.isComplite===true ? "text-decoration-line-through" : "") }>{task.taskTitle}</span></Col>
                            <Col className="text-end">
                                <Button variant="success" className="me-2" onClick={()=>MainhandleUpdate(i,task.taskTitle) }>Update</Button>
                                <Button variant="danger" onClick={()=> handleDelete(i) }>Delete</Button>
                                </Col>
                            
                        </Row>
                    </li>
                ))
                }
            </ul>
        </Col>
    )
}

export default TaskList
