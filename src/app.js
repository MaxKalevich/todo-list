import React, {Component} from "react";

import {Div} from "./App-styled";

import {Header} from "./Components/Header/header";
import {TodoList} from "./Components/TodoList/todo-list";
import {ItemAddForm} from "./Components/ItemAddForm/item-add-form";
import {Search} from "./Components/Search/search";
import {ItemStatusFilter} from "./Components/ItemStatusFilter/item-status-filter";

export class App extends Component {

    editLabelFunc = (text) => {
        const {editLabelAC} = this.props;
        editLabelAC(text);
    };

    updateText = (text) => {
        const {updTextAC} = this.props;
        updTextAC(text);
    };

    findElement = (id, label) => {
        const {findElementAC} = this.props;
        findElementAC(label, id);
    };

    importantToggleItem = (id) => {
        const {importantItemAC} = this.props;
        importantItemAC(id);
    };

    doneToggleItem = (id) => {
        const {doneItemAC} = this.props;
        doneItemAC(id);
    };

    addItem = (text) => {
        const {addItemAC} = this.props;
        addItemAC(text);
    };

    deleteToggleItem = (id) => {
        const {addDeleteAC} = this.props;
        addDeleteAC(id);
    };

    onSearch = (items, match) => {
        return match.length === 0 ? items :
            items.filter(item => item.label.toLowerCase().includes(match.toLowerCase()));
    };

    onMatch = (text) => {
        const {setMatchAC} = this.props;
        setMatchAC(text);
    };

    filter = (items, filter) => {
        switch (filter) {
            case "all":
                return items;
            case "done":
                return items.filter(item => item.done)
            case "active":
                return items.filter(item => !item.done)
            default:
                return items
        }
    };

    onFilterChange = (text) => {
        const {setFilterAC} = this.props;
        setFilterAC(text);
    };

    render() {

        const { todoData, match, filter, editMode, label } = this.props;

        const totalTask = todoData.filter((el) => el).length;
        const completeTask = todoData.filter((el) => el.done).length;
        const moreTasks = totalTask - completeTask;
        const visibleItems = this.filter(this.onSearch(todoData, match), filter);

        return (
            <Div>
                <Header totalTask={totalTask}
                        completeTask={completeTask}
                        moreTasks={moreTasks}/>
                <ItemStatusFilter onFilterChange={this.onFilterChange}
                                  filter={filter}/>
                <Search onMatch={this.onMatch}/>
                <TodoList todos={visibleItems}
                          doneToggleItem={this.doneToggleItem}
                          importantToggleItem={this.importantToggleItem}
                          deleteToggleItem={this.deleteToggleItem}
                          findElement={this.findElement}/>
                <ItemAddForm todos={todoData}
                             addItem={this.addItem}
                             editLabel={label}
                             editLabelFunc={this.editLabelFunc}
                             updateText={this.updateText}
                             editMode={editMode}/>
            </Div>
        );
    };
}
