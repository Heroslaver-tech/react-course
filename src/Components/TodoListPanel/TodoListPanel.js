import TodoCreate from "../TodoCreate/TodoCreate";
import TodoTitle from "../TodoTitle/TodoTitle";
import TodoList from "../TodoList/TodoList";

const TodoListPanel = () => {
    return (
        <>
            <TodoTitle />
            <TodoList />
            <TodoCreate />
        </>
    );
};

export default TodoListPanel;
