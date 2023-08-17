import TodoListPanel from "../TodoListPanel/TodoListPanel";
import TodoPanel from "../TodoPanel/TodoPanel";
import './App.css';
import TodoState from '../../Context/Todo/TodoState'

export default function App (){
    return(
        <TodoState>
            <TodoListPanel/>
            <TodoPanel/>
        </TodoState>
    )
}