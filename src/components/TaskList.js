import React from 'react'
import {Row, Col, Button} from 'react-bootstrap';

function TaskList({tasks, handleDelete}) {
    return (
        <Col>
            <ul className="tasks-list">
                {tasks.length !== 0 && tasks.map((task,i)=>(
                    <li key={i} className="bg-white p-3 rounded-3 shadow-sm mb-3">
                        <Row>
                            <Col className="align-middle"><input type="checkbox" className="form-check-input me-2"/><span className={ "fw-bold "+ (task.isComplite==1 && "text-decoration-line-through")}>{task.taskTitle}</span></Col>
                            <Col className="text-end"><Button variant="danger" onClick={()=> handleDelete(i) }>Delete</Button></Col>
                        </Row>
                    </li>
                ))
                }
            </ul>
        </Col>
    )
}

export default TaskList
