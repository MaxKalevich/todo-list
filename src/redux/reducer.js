import {
    ADD_ITEM,
    DELETE_ITEM,
    DONE_ITEM,
    EDIT_LABEL,
    FIND_ELEMENT,
    IMPORTANT_ITEM,
    SET_FILTER,
    SET_MATCH,
    UPD_TEXT
} from "./constants";

const initState = {
    todoData: [{label: "React TodoApp", important: false, done: false, id: 0}],
    match: "",
    filter: "active",
    label: "",
    findId: "",
    editMode: false,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            return {
                ...state, todoData: [...state.todoData,
                    {
                        label: action.payload, important: false,
                        done: false, id: ++state.todoData.length
                    },
                    ],
            }
        }
        case DELETE_ITEM: {
            return {
                ...state,
                todoData: state.todoData.filter(el => el.id !== action.payload),
            }
        }
        case DONE_ITEM: {
            return {
                ...state,
                todoData: state.todoData.map(el =>
                    el.id === action.payload ? {...el, done: !el.done} : el),
            }
        }
        case IMPORTANT_ITEM: {
            return {
                ...state,
                todoData: state.todoData.map(e =>
                    e.id === action.payload ? {...e, important: !e.important} : e),
            }
        }
        case SET_MATCH: {
            return {
                ...state,
                match: action.payload,
            }
        }
        case SET_FILTER: {
            return {
                ...state,
                filter: action.payload,
            }
        }
        case FIND_ELEMENT: {
            return {
                ...state,
                label: action.label,
                findId: action.id,
                editMode: !state.editMode,
            }
        }
        case UPD_TEXT: {
            const id = state.findId;
            return {
                ...state,
                todoData: state.todoData.map((el) =>
                    el.id === id ? {...el, label: action.payload} : el),
                editMode: !state.editMode,
            }
        }
        case EDIT_LABEL: {
            return {
                ...state,
                label: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

export {reducer};
