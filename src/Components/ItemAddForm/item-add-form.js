import React, {Component} from "react";

import {Form, Input} from "./item-add-form-styled";

class ItemAddForm extends Component {

    state = {
        label: "",
        labelEdit: "",
    };

    onLabelChange = (e) => { //сетаем в стейт значения из формы
        this.setState({
            label: e.target.value
        });
    };

    onLabelChangeEdit = (e) => {
        this.props.editLabelFunc(e.target.value);
    };

    onSubmit = (e) => {
        e.preventDefault(); // отмена стандартного действия при отправке формы

        if (this.props.editMode) {
            this.props.updateText(this.props.editLabel);
            this.props.editLabelFunc("");
        } else {
            this.state.label && this.props.addItem(this.state.label);
            this.setState({
                label: ""
            });
        }
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                {
                    this.props.editMode ?
                        <Input className="form-control" type="text"
                               onChange={this.onLabelChangeEdit}
                               placeholder="Want to change your message?"
                               value={this.props.editLabel}/> :
                        <Input className="form-control" type="text"
                               onChange={this.onLabelChange}
                               placeholder="Enter your message"
                               value={this.state.label}/>
                }
                <button className="btn btn-secondary">Add Item Post</button>
            </Form>
        );
    };
}

export {ItemAddForm};
