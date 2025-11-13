export function TasksSummary({ tasks }) {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.state === 'completed').length;
    const pending = total - completed;
    const progress = total > 0 ? (completed / total) * 100 : 0;

    return (
        <div className="mx-auto" style={{ maxWidth: '800px' }}>
            <div className="d-flex justify-content-between align-items-center bg-light rounded p-2 my-3 shadow-sm gap-2">
                <span>
                    <strong>Total:</strong> {total}
                </span>
                <span className="text-success">
                    <strong>Completadas:</strong> {completed}
                </span>
                <span className="text-danger">
                    <strong>Faltantes:</strong> {pending}
                </span>
            </div>
            <div className="progress" style={{ height: '1.2rem' }}>
                <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {Math.round(progress)}%
                </div>
            </div>
        </div>
    );
}
