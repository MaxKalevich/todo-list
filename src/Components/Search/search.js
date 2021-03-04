import React, {Component} from "react";

import {Input} from "./search-styled";

class Search extends Component {

    state = {
        term: "",
    };

    onSearchChange = (e) => {
        this.setState({term: e.target.value});
        this.props.onMatch(e.target.value);
    };

    render() {
        return (
            <Input className="form-control form-control-sm" type="text"
                   placeholder="Enter search text"
                   onChange={this.onSearchChange}
                   value={this.state.term}/>
        );
    };
}

export {Search};
