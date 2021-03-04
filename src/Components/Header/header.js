import React from "react";

import {Div, Span} from "./header-styled";

const Header = (props) => {

    const {completeTask, moreTasks} = props;

    return (
        <>
            <Div>
                My ToDoApp
            </Div>
            <Span>more to do {moreTasks}, done {completeTask}</Span>
        </>
    );
}

export {Header};
