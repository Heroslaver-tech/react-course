import './todoPanel.css'
import { useContext, useState } from 'react'
import Todo from '../Todo/Todo'
import TodoContext from '../../Context/Todo/TodoContext'

const TodoPanel = () => {
    
    const { todos, selectedTodo } =useContext(TodoContext)
    console.log(selectedTodo);
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

    return(
        <div className='container-todoPanel'>
            <Todo key={selectedTodo.id} info={selectedTodo} handleCheck={handleCheck} handleFavorite={handleFavorite} editable={true} />
            
            <div className='div-container-todoPanel'>
                nota
            </div>
        </div>
    )
}

export default TodoPanel;