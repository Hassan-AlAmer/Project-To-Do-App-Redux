import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TaskList from "./TaskList";
import {Row} from 'react-bootstrap';
import { removeTask } from "../actions/taskActions";

function Tasks() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch=useDispatch();
    console.log(tasks);
    const handleDelete =(index)=>{
        dispatch(removeTask(index));      
    }
    return (
        <Row>
            <TaskList tasks={tasks} handleDelete={handleDelete}/>
        </Row>
    )
}

export default Tasks
