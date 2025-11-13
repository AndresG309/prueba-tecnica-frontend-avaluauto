export function FilterButton({ icon, label, isActive, onClick }) {
    const Icon = icon;
    return (
        <div className="d-flex flex-column align-items-center">
            <button
                className={`btn p-1 btn-outline-primary d-flex justify-content-center align-items-center ${
                    isActive ? 'active' : ''
                }`}
                onClick={onClick}
            >
                <Icon size={24} />
            </button>
            <small className="text-center mt-1" style={{fontSize:12}}>{label}</small>
        </div>
    );
}
