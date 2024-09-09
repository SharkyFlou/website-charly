import React, { Component } from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import './Tabs.css';


class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.id,
        };
    }

    onClickTabItem = (tabId) => {
        this.setState({ activeTab: tabId });
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((child) => {
                        const { id, label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={id}
                                id={id}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.id !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;
