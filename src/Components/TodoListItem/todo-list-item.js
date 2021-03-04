import React from "react";

import "./todoListItem.css";

const TodoListItem = (props) => {

    const {
        label, done, importantToggleItem, important,
        deleteToggleItem, doneToggleItem, findElement
    } = props;

    let hasCheckClassName = done ? " check" : "";
    let hasImportantClassName = important ? " important" : "";

    let classNames = `elements${hasCheckClassName}${hasImportantClassName}`;

    return (
        <span className="wrapperToDo">
                <span className={classNames}
                      onClick={doneToggleItem}>
                {label}
                </span>
                <button className="btn btn-outline-primary"
                        type="button"
                        onClick={importantToggleItem}>
                    <i className="fa fa-exclamation"/>
                </button>
                <button className="btn btn-outline-danger"
                        type="button"
                        onClick={deleteToggleItem}>
                    <i className="fa fa-trash-o"/>
                </button>
                <button className="btn btn-outline-warning"
                        type="button"
                        onClick={findElement}>
                    <i className="fa fa-pencil"/>
                </button>
        </span>
    );
}


export default TodoListItem;
