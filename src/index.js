import React from "react";
import ReactDOM from "react-dom/client";
// import Button from "./Button";
// import Card from "./Card";
import { MyContextProvider } from './Context'

import TodoListPanel from "./TodoListPanel";
import TodoPanel from "./TodoPanel";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const panels = true;
root.render(
    <>
        <MyContextProvider>
            <TodoListPanel/>
            {panels && <TodoPanel/>}
        </MyContextProvider>
    </>
);
