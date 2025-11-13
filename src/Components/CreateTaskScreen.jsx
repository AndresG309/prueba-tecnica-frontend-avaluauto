export function CreateTaskScreen({ toggleStateFunction, createTaskFunction }) {
    return (
        <div className="screenOverlay">
            <div className="floatingScreen">
                <h1>Create new task</h1>

                <label htmlFor="taskName">Name</label>
                <input name="taskName" type="text" />

                <label htmlFor="taskDescription">Description</label>
                <textarea name="taskDescription"></textarea>

                <label htmlFor="taskFinalDate">Final Date</label>
                <input name="taskFinalDate" type="date"></input>

                <label htmlFor="taskPriority">Priority</label>
                <select name="taskPriority">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <div className="addTaskButton" onClick={createTaskFunction}>
                    <div className="svgButton">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="closeWindow" onClick={toggleStateFunction}>
                    <div className="svgButton">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
