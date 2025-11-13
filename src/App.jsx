import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// Components
import { TasksList } from './Components/Tasks/TasksList.jsx';
import { TasksSummary } from './Components/Tasks/TasksSummary.jsx';
import { FiltersPanel } from './Components/Filters/FiltersPanel.jsx';
import { TaskForm } from './Components/Tasks/TaskForm.jsx';
// Icons
import { MdAdd } from 'react-icons/md';

function App() {
    // --------------- Variables
    const filters = {
        all: 'all',
        byDate: 'byDate',
        byPriority: 'byPriority',
        byState: 'byState',
    };
    const subFilters = {
        none: 'none',
        priorityLow: 'priorityLow',
        priorityMedium: 'priorityMedium',
        priorityHigh: 'priorityHigh',
        statePending: 'statePending',
        stateInProgress: 'stateInProgress',
        stateExpired: 'stateExpired',
        stateCompleted: 'stateCompleted',
    };

    // ------------- States
    // const [tasksList, setTasksList] = useState([
    //     {
    //         id: uuidv4(),
    //         name: 'Tarea',
    //         description: 'Descripción tarea',
    //         finalDate: '2020-11-12',
    //         priority: priorityLevels.low,
    //         state: states.pending,
    //     },
    //     {
    //         id: uuidv4(),
    //         name: 'Tarea',
    //         description:
    //             'Descripción tarea 2jqnwdo ndjo newjd nwoeifjb wpeifjb pweifb wpeiufb pweuofbwóiefn óinqd+wn qpwodbn qowidn qwiodnqwíodnqwí dn',
    //         finalDate: '2020-11-12',
    //         priority: priorityLevels.low,
    //         state: states.completed,
    //     },
    // ]);
    const [tasksList, setTasksList] = useState(() => {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    });

    const [isShowingTaskForm, setIsShowingTaskForm] = useState(false);
    const [taskFormCurrentData, setTaskFormCurrentData] = useState({});
    const [taskFormAction, setTaskFormAction] = useState('');

    const [activeFilter, setActiveFilter] = useState(filters.all);
    const [activeSubFilter, setActiveSubFilter] = useState(subFilters.none);
    const [searchText, setSearchText] = useState('');

    // ------------- Effects
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasksList));
    }, [tasksList]);

    // ------------- Functionalities
    // Task Handlers
    function deleteTask(id) {
        const newlist = tasksList.filter((task) => task.id !== id);
        setTasksList(newlist);
    }
    function createTask(taskData) {
        const newTask = { ...taskData, id: uuidv4() };
        setTasksList([...tasksList, newTask]);
    }
    function editTask(newData) {
        const updatedTasksList = tasksList.map((task) => {
            if (task.id === newData.id) {
                return { ...task, ...newData };
            }
            return task;
        });
        setTasksList(updatedTasksList);
    }
    // Task Form Handlers
    function toggleTaskForm() {
        setIsShowingTaskForm(!isShowingTaskForm);
    }
    function openCreateTaskForm() {
        setTaskFormAction('create');
        setTaskFormCurrentData({});
        toggleTaskForm();
    }
    function openEditTaskForm(taskData) {
        setTaskFormAction('edit');
        setTaskFormCurrentData({ ...taskData });
        toggleTaskForm();
    }
    // Filters Handlers
    function changeActiveFilter(newFilter) {
        setActiveFilter(newFilter);
    }
    function changeActiveSubFilter(newSubFilter) {
        setActiveSubFilter(newSubFilter);
    }

    // JSX
    return (
        <div className="container-fluid min-vh-100 min-vw-100 d-flex flex-column p-0 m-0">
            <header className="position-sticky top-0 z-3 p-3 bg-white shadow-sm border-bottom">
                <h1 className="text-center">
                    Prueba Técnica Front-End AvaluAuto
                </h1>
                <TasksSummary tasks={tasksList} />
            </header>
            <div
                className="container py-4 position-relative"
                style={{ maxWidth: '700px' }}
            >
                <input
                    type="text"
                    placeholder="Search Task..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="form-control mb-3"
                />
                <div className="d-flex flex-row" style={{ minHeight: '500px' }}>
                    <div
                        className="bg-light rounded-pill p-2 position-fixed"
                        style={{ zIndex: 10 }}
                    >
                        <FiltersPanel
                            filters={filters}
                            subFilters={subFilters}
                            activeFilter={activeFilter}
                            activeSubFilter={activeSubFilter}
                            changeFilterFunction={changeActiveFilter}
                            changeSubFilterFunction={changeActiveSubFilter}
                        />
                    </div>
                    <div
                        className="d-flex flex-column gap-3 mx-auto"
                        style={{ width: '70vw', maxWidth: '500px' }}
                    >
                        <TasksList
                            tasksList={tasksList}
                            filters={filters}
                            subFilters={subFilters}
                            activeFilter={activeFilter}
                            activeSubFilter={activeSubFilter}
                            textFilter={searchText}
                            editTask={openEditTaskForm}
                            deleteTask={deleteTask}
                        />
                    </div>
                </div>
                <button
                    className="btn p-1 btn-outline-success d-flex justify-content-center align-items-center position-fixed bottom-0 end-0 m-4"
                    onClick={openCreateTaskForm}
                >
                    <MdAdd size={24} />
                </button>
            </div>
            {isShowingTaskForm && (
                <TaskForm
                    action={taskFormAction}
                    data={taskFormCurrentData}
                    closeFormFunction={toggleTaskForm}
                    createTaskFunction={createTask}
                    editTaskFunction={editTask}
                ></TaskForm>
            )}
        </div>
    );
}

export default App;
