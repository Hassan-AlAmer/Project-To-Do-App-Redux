import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TaskList from "./TaskList";
import {Row} from 'react-bootstrap';
import { removeTask } from "../actions/taskActions";

function Tasks({handleUpdate, handleCancelUpdate}) {
    const tasks = useSelector((state) => state.tasks);
    const dispatch=useDispatch();

    const handleDelete =(index)=>{
        dispatch(removeTask(index));
        handleCancelUpdate();   
    }
    
    
    return (
        <Row className="list-cont">
            <TaskList tasks={tasks} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        </Row>
    )
}

export default Tasks
