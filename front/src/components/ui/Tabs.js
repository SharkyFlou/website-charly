import { Children, useState } from 'react';
import Tab from './Tab';
import './Tabs.css';

function Tabs({ children }) {
    const tabs = Children.toArray(children);
    const [activeTab, setActiveTab] = useState(tabs[0]?.props.id);

    return (
        <div className='tabs'>
            <ol className='tab-list' role='tablist'>
                {tabs.map((child) => {
                    const { id, label } = child.props;
                    return (
                        <Tab
                            key={id}
                            activeTab={activeTab}
                            id={id}
                            label={label}
                            onClick={setActiveTab}
                        />
                    );
                })}
            </ol>
            <div className='tab-content' role='tabpanel'>
                {tabs
                    .filter((child) => child.props.id === activeTab)
                    .map((child) => child.props.children)}
            </div>
        </div>
    );
}

export default Tabs;
