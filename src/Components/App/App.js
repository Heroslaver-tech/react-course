import { useContext } from "react";
import TodoListPanel from "../TodoListPanel/TodoListPanel";
import TodoPanel from "../TodoPanel/TodoPanel";
import TodoContext from "../../Context/Todo/TodoContext";
import "./app.css";

export default function App() {
    const { panel } = useContext(TodoContext);
    return (
        <div className={`app-container ${panel && 'app-container-on'}`}>
            <TodoListPanel />
            {panel && <TodoPanel />}
        </div>
    );
}
