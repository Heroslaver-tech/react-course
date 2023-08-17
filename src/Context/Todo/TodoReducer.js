import { SET_TODO, GET_SELECTED_TODO, CHANGE_PANEL } from "../types";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_TODO:
            return {
                ...state,
                todos: payload,
            };
        case GET_SELECTED_TODO:
            return {
                ...state,
                selectedTodo: payload,
            };
        case CHANGE_PANEL:
            return {
                ...state,
                panel: payload,
            };
    }
};
