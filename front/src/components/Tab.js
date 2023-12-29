import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { id, onClick } = this.props;
        onClick(id);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                id,
                label,
            },
        } = this;

        let className = 'tab-list-item';

        if (activeTab === id) {
            className += ' tab-list-active';
        }

        return (
            <li
                className={className}
                onClick={onClick}
            >
                {label}
            </li>
        );
    }
}

export default Tab;
