import React, { useReducer } from "react";
import UserReducer from "./TodoReducer";
import TodoContext from "./TodoContext";

const TodoState = (props) => {
    const initialState = {
        todos: [
            {
                id: 0,
                title: "Titulo del to Do",
                note: "descripcion de la nota",
                checked: true,
                favorited: true,
            },
            {
                id: 1,
                title: "Titulo del to Do 2",
                note: "descripcion de la nota 2",
                checked: false,
                favorited: false,
            },
            {
                id: 2,
                title: "Titulo del to Do 3",
                note: "descripcion de la nota 3",
                checked: false,
                favorited: true,
            },
            {
                id: 3,
                title: "Titulo del to Do 4",
                note: "descripcion de la nota 4",
                checked: true,
                favorited: false,
            },
        ],
        selectedTodo: 0,
        panel: false,
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const setTodo = (data) => {
        const NewData = [...state.todos, data];
        dispatch({
            type: "SET_TODO",
            payload: NewData,
        });
    };

    const setSelectedTodo = (id) => {
        dispatch({
            type: "GET_SELECTED_TODO",
            payload: state.todos[id],
        });
    };

    const changePanel = (id) => {
        let data = state.panel
        if (state.panel === true && id === state.selectedTodo.id){
            data = !state.panel            
        }else if(state.panel === false){
            data = !state.panel
        }
        setSelectedTodo(id)
        dispatch({
            type: "CHANGE_PANEL",
            payload: data,
        });
    };

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                selectedTodo: state.selectedTodo,
                panel: state.panel,
                setTodo,
                setSelectedTodo,
                changePanel,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoState;
