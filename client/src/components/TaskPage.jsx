import { useEffect, useState } from 'react';
import taskServices from '../services/task-services';
import Task from "./Task";

function TaskPage() {

    const [currentTasks, setCurrentTasks] = useState([]);

    useEffect(()=>{

        const getAllTasks = async () => {
            const tasksData = await taskServices.getAllTasks();
            if(tasksData.data) { 
                setCurrentTasks(tasksData.data)
            }
        }

        getAllTasks();
    }, []);

    return (
        <div className="container">
            <h1>Mi lista de tareas</h1>
            {currentTasks.map(tarea => <Task description={tarea.description} />)}
        </div>)
}

export default TaskPage;