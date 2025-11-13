import { Task } from './Task.jsx';

export function TasksList({
    tasksList,
    filters,
    subFilters,
    activeFilter,
    activeSubFilter,
    textFilter,
    editTask,
    deleteTask,
}) {
    // Variables
    const filteredTasks = tasksList
        .filter((task) => {
            switch (activeFilter) {
                case filters.all:
                    return true;

                case filters.byPriority:
                    if (activeSubFilter === subFilters.none) return true;
                    if (activeSubFilter === subFilters.priorityHigh)
                        return task.priority === 'high';
                    if (activeSubFilter === subFilters.priorityMedium)
                        return task.priority === 'medium';
                    if (activeSubFilter === subFilters.priorityLow)
                        return task.priority === 'low';
                    return false;

                case filters.byState:
                    if (activeSubFilter === subFilters.none) return true;
                    if (activeSubFilter === subFilters.statePending)
                        return task.state === 'pending';
                    if (activeSubFilter === subFilters.stateInProgress)
                        return task.state === 'inProgress';
                    if (activeSubFilter === subFilters.stateCompleted)
                        return task.state === 'completed';
                    if (activeSubFilter === subFilters.stateExpired)
                        return task.state === 'expired';
                    return false;

                default:
                    return true;
            }
        })
        .filter(
            (task) =>
                task.name.toLowerCase().includes(textFilter.toLowerCase()) ||
                task.description
                    .toLowerCase()
                    .includes(textFilter.toLowerCase())
        );

    // JSX
    return filteredTasks.map((task) => (
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
    ));
}
