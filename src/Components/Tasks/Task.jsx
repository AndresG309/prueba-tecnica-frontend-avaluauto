import { useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

export function Task({
    id,
    name,
    description,
    finalDate,
    priority,
    state,
    editTaskFunction,
    deleteTaskFunction,
}) {
    // Varibales
    const MAX_DESCRIPTION_LENGTH = 80;

    // States
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    // Functionalities
    function createClassName() {
        let className = 'card border-3';
        const todaysDate = new Date().toISOString().split('T')[0];
        if (state === 'completed') {
            className += '  border-success';
        } else {
            if (todaysDate > finalDate && finalDate != '') {
                className += '  border-danger';
            } else {
                className += '  border-primary';
            }
        }
        return className;
    }
    function toggleExpand() {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    }
    function changeDescriptionDisplay() {
        if (isDescriptionExpanded) {
            return description + ' ';
        } else if (description.length > MAX_DESCRIPTION_LENGTH) {
            return description.slice(0, MAX_DESCRIPTION_LENGTH) + '... ';
        } else return description + ' ';
    }
    function packTaskData() {
        return {
            id,
            name,
            description,
            finalDate,
            priority,
            state,
        };
    }

    // JSX
    return (
        <div className={createClassName()}>
            <div className="card-body d-flex gap-3">
                {/* Task Info */}
                <div className="d-flex w-100 flex-column">
                    <h3>{name}</h3>
                    <span>
                        <strong>Descripción: </strong>
                        {changeDescriptionDisplay()}
                        {description.length < MAX_DESCRIPTION_LENGTH ? (
                            ''
                        ) : isDescriptionExpanded ? (
                            <span
                                className="text-decoration-underline"
                                style={{ cursor: 'pointer' }}
                                onClick={toggleExpand}
                            >
                                Ver menos
                            </span>
                        ) : (
                            <span
                                className="text-decoration-underline"
                                style={{ cursor: 'pointer' }}
                                onClick={toggleExpand}
                            >
                                Ver más
                            </span>
                        )}
                    </span>
                    <span>
                        <strong>Fecha: </strong>
                        {finalDate}
                    </span>
                    <span>
                        <strong>Prioridad: </strong>
                        <span
                            className={`badge ${
                                priority === 'high'
                                    ? 'bg-danger'
                                    : priority === 'medium'
                                    ? 'bg-warning text-dark'
                                    : 'bg-success'
                            }`}
                        >
                            {priority}
                        </span>
                    </span>
                    <span>
                        <strong>Estado: </strong>
                        <span>{state}</span>
                    </span>
                </div>
                {/* Action Buttons */}
                <div className="d-flex flex-column gap-2 justify-content-center">
                    <button
                        className="btn p-1 btn-outline-primary d-flex justify-content-center align-items-center"
                        onClick={() => editTaskFunction(packTaskData())}
                    >
                        <MdEdit size={24} />
                    </button>

                    <button
                        className="btn p-1 btn-outline-danger d-flex justify-content-center align-items-center"
                        onClick={() => deleteTaskFunction(id)}
                    >
                        <MdDelete size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}
