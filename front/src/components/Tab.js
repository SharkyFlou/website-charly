function Tab({ activeTab, id, label, onClick }) {
    const className = activeTab === id ? 'tab-list-item tab-list-active' : 'tab-list-item';

    return (
        <li className={className} onClick={() => onClick(id)}>
            {label}
        </li>
    );
}

export default Tab;
