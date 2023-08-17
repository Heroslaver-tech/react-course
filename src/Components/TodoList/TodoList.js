import { useContext, useState, useEffect } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

//import context
import TodoContext from '../../Context/Todo/TodoContext' 


export default function TodoList() {
    //Load the to do list
    const { todos } = useContext(TodoContext);
    //****************USE STATES********************/
    
    //For change the check status of "to dos"
    const [checks, setChecks] = useState(
        todos.map((element) => {
            return element.checked;
        })
    );
    
    //For change the favorite status of "to dos"
    const [favorites, setFavorites] = useState(
        todos.map((element) => {
            return element.favorited;
        })
    );

    //Event when user click the check icon, this change the icon and check status
    const handleCheck = (index) => {
        const newChecks = [...checks];
        newChecks[index] = !checks[index];
        todos[index].checked = !checks[index];
        setChecks(newChecks);
    };

    //Event when user click the favorite icon, this change the icon and check status
    const handleFavorite = (index) => {
        const newFavorites = [...favorites];
        newFavorites[index] = !favorites[index];
        todos[index].favorited = !favorites[index];
        setFavorites(newFavorites);
    };

    return (
        <div className="container-TodoList">
            {todos.map((element) => {
                return (
                    <Todo key={element.id} info={element} handleCheck={handleCheck} handleFavorite={handleFavorite} editable={false} />
                );
            })}
        </div>
    );
}
