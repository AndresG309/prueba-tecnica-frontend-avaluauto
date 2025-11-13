import { useEffect } from 'react';
import { useState } from 'react';
// Components
import { MdClose } from 'react-icons/md';

export function TaskForm({
    action,
    data,
    closeFormFunction,
    createTaskFunction,
    editTaskFunction,
}) {
    // Variables
    const checkData = {
        id: data.id || '',
        name: data.name || '',
        description: data.description || '',
        finalDate: data.finalDate || '',
        priority: data.priority || 'low',
        state: data.state || 'pending',
    };

    // States
    const [currentData, setCurrentData] = useState(checkData);

    // Effects
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    // Functionalities
    function handleInputChange(e) {
        setCurrentData({ ...currentData, [e.target.name]: e.target.value });
    }

    // JSX
    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
            style={{ backdropFilter: 'blur(5px)', zIndex: 999 }}
        >
            <div
                className="bg-light rounded shadow-lg p-4"
                style={{
                    width: '90%',
                    maxWidth: '500px',
                    maxHeight: '900px',
                }}
            >
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="m-0">
                        {action === 'create' ? 'Create task' : 'Edit task'}
                    </h4>
                    <button
                        className="btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center"
                        onClick={closeFormFunction}
                    >
                        <MdClose size={20} />
                    </button>
                </div>

                {/* Form */}
                <form
                    className="d-flex flex-column gap-3"
                    onSubmit={() => {
                        if (action === 'create') {
                            createTaskFunction(currentData);
                        } else {
                            editTaskFunction(currentData);
                        }
                        closeFormFunction();
                    }}
                >
                    <div>
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter task name"
                            value={currentData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea
                            name="description"
                            className="form-control"
                            rows="3"
                            placeholder="Describe the task"
                            value={currentData.description}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="finalDate" className="form-label">
                            Final Date
                        </label>
                        <input
                            name="finalDate"
                            type="date"
                            className="form-control"
                            value={currentData.finalDate}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="priority" className="form-label">
                            Priority
                        </label>
                        <select
                            name="priority"
                            className="form-select"
                            value={currentData.priority}
                            onChange={handleInputChange}
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div className="pb-2">
                        <label htmlFor="state" className="form-label">
                            State
                        </label>
                        <select
                            name="state"
                            className="form-select"
                            value={currentData.state}
                            onChange={handleInputChange}
                        >
                            <option value="pending">Pending</option>
                            <option value="inProgress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    <div className="d-flex justify-content-end">
                        <button
                            type="submit"
                            className="btn btn-primary d-flex align-items-center"
                        >
                            {action === 'create' ? 'Create' : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
