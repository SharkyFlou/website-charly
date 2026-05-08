function Tab({ activeTab, id, label, onClick }) {
    const isActive = activeTab === id;
    const className = isActive ? 'tab-list-item tab-list-active' : 'tab-list-item';

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(id);
        }
    };

    return (
        <li
            role='tab'
            className={className}
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onClick(id)}
            onKeyDown={handleKeyDown}
        >
            {label}
        </li>
    );
}

export default Tab;
