import React from "react";
import ReactDOM from "react-dom/client";
import App from './Components/App/App';
import TodoState from './Context/Todo/TodoState'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
        <TodoState>
            <App/>
        </TodoState>
);
