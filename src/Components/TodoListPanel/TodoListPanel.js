import TodoCreate from "../TodoCreate/TodoCreate";
import TodoTitle from "../TodoTitle/TodoTitle";
import TodoList from "../TodoList/TodoList";
import './todoListPanel.css'

const TodoListPanel = () => {
    return (
        <div className={'todo-list-panel-container'}>
            <TodoTitle />
            <TodoList />
            <TodoCreate />
        </div>
    );
};

export default TodoListPanel;
