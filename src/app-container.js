import {connect} from "react-redux";

import * as actions from "./redux/actions";

import {App} from "./app";

const mapStateToProps = ({todoData, match, filter, label, findId, editMode}) =>
    ({todoData, match, filter, label, findId, editMode});

export const AppContainer = connect(mapStateToProps, actions)(App);
