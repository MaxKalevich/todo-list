import React, {Component} from "react";

import "./itemStatusFilter.css";

class ItemStatusFilter extends Component {

    buttons = [
        {name: "all", label: "All"},
        {name: "active", label: "Active"},
        {name: "done", label: "Done"},
    ];

    render() {

        const {onFilterChange, filter} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? "btn btn-outline-primary btnFilterActive" : "btn btn-outline-primary"
            return <button key={name}
                           className={`btnFilter ${clazz}`}
                           onClick={() => onFilterChange(name)}>
                {label}
            </button>
        });
        return (
            <div className="wrap">
                {buttons}
            </div>
        );
    };
}

export {ItemStatusFilter};
