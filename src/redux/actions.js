import {
    ADD_ITEM,
    DELETE_ITEM,
    DONE_ITEM,
    EDIT_LABEL,
    FIND_ELEMENT,
    IMPORTANT_ITEM,
    SET_FILTER,
    SET_MATCH,
    UPD_TEXT,
} from "./constants";

const addItemAC = (payload) => ({type: ADD_ITEM, payload});
const addDeleteAC = (payload) => ({type: DELETE_ITEM, payload});
const doneItemAC = (payload) => ({type: DONE_ITEM, payload});
const editLabelAC = (payload) => ({type: EDIT_LABEL, payload});
const findElementAC = (label, id) => ({type: FIND_ELEMENT, label, id});
const importantItemAC = (payload) => ({type: IMPORTANT_ITEM, payload});
const setFilterAC = (payload) => ({type: SET_FILTER, payload});
const setMatchAC = (payload) => ({type: SET_MATCH, payload});
const updTextAC = (payload) => ({type: UPD_TEXT, payload});

export {
    addItemAC,
    addDeleteAC,
    doneItemAC,
    editLabelAC,
    findElementAC,
    importantItemAC,
    setFilterAC,
    setMatchAC,
    updTextAC,
};
