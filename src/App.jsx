import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
// Components
import { MdAdd } from 'react-icons/md';
import { Task } from './Components/Task.jsx';
import { CreateTaskScreen } from './Components/CreateTaskScreen.jsx';

function App() {
    // Variables
    const priorityLevels = {
        low: 'low',
        medium: 'medium',
        high: 'high',
    };
    const states = {
        pending: 'pending',
        inProgress: 'inProgress',
        expired: 'expired',
        completed: 'completed',
    };

    // States declarations
    const [tasksList, setTasksList] = useState([
        {
            id: uuidv4(),
            name: 'Tarea',
            description: 'Descripción tarea',
            finalDate: '2020-11-12',
            priority: priorityLevels.low,
            state: states.pending,
        },
        {
            id: uuidv4(),
            name: 'Tarea',
            description:
                'Descripción tarea 2jqnwdo ndjo newjd nwoeifjb wpeifjb pweifb wpeiufb pweuofbwóiefn óinqd+wn qpwodbn qowidn qwiodnqwíodnqwí dn',
            finalDate: '2020-11-12',
            priority: priorityLevels.low,
            state: states.completed,
        },
    ]);

    const [isCreatingTask, setIsCreatingTask] = useState(false);

    // functionalities
    function addTask() {
        const newlist = [...tasksList];
        newlist.push({
            id: uuidv4(),
            name: 'Nueva Tarea',
            description: 'Descripción tarea nueva',
            finalDate: new Date().toISOString().split('T')[0],
            priority: priorityLevels.low,
            state: states.pending,
        });
        setTasksList(newlist);
    }

    function toggleTaskCreator() {
        setIsCreatingTask(!isCreatingTask);
    }

    function deleteTask(id) {
        const newlist = tasksList.filter((task) => task.id !== id);
        setTasksList(newlist);
    }

    function editTask(id, newData) {
        toggleTaskCreator();
        const newlist = tasksList.map((task) => {
            if (task.id === id) {
                return { ...task, ...newData };
            } else return task;
        });
        setTasksList(newlist);
    }

    // Content
    return (
        <div className="container-fluid min-vh-100 min-vw-100 d-flex flex-column p-0 m-0">
            <header className="position-sticky top-0 z-3 p-3 bg-white">
                <h1>Prueba Técnica FrontEnd AvaluAuto</h1>
                <span id="taskCounter">Total tareas: {tasksList.length}</span>
            </header>
            <div className="container py-4">
                <div className="contentBody">
                    <div id="sideBar"></div>
                    <div className="d-flex flex-column gap-3 overflow-y-scroll">
                        {tasksList.map((task) => {
                            return (
                                <Task
                                    key={task.id}
                                    id={task.id}
                                    name={task.name}
                                    description={task.description}
                                    finalDate={task.finalDate}
                                    priority={task.priority}
                                    state={task.state}
                                    editTaskFunction={editTask}
                                    deleteTaskFunction={deleteTask}
                                />
                            );
                        })}
                    </div>
                </div>
                <button
                    className="btn p-1 btn-outline-success d-flex justify-content-center align-items-center"
                    onClick={toggleTaskCreator}
                >
                    <MdAdd size={24} />
                </button>
            </div>
            {isCreatingTask && (
                <CreateTaskScreen
                    toggleStateFunction={toggleTaskCreator}
                    createTaskFunction={addTask}
                ></CreateTaskScreen>
            )}
        </div>
    );
}

export default App;
