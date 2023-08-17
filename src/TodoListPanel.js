import TodoCreate from "./TodoCreate";
import TodoTitle from "./TodoTitle";
import TodoList from "./TodoList";

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
