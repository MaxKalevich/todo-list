import React from "react";

import {Div} from "./todo-list-styled";
import TodoListItem from "../TodoListItem/todo-list-item";



const TodoList = ({todos, doneToggleItem, importantToggleItem, deleteToggleItem, findElement}) => {
    const Elements = todos.map((el) => {
        return <div key={el.id}>
            <TodoListItem label={el.label}
                          done={el.done}
                          doneToggleItem={() => doneToggleItem(el.id)}
                          importantToggleItem={() => importantToggleItem(el.id)}
                          important={el.important}
                          deleteToggleItem={() => deleteToggleItem(el.id)}
                          findElement={() => findElement(el.id, el.label)}/>
        </div>
    });
    return (
        <Div>
            {Elements}
        </Div>
    );
};

export {TodoList};
