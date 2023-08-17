import { useContext, useState } from "react";
import "./todoCreate.css";
//import context
import TodoContext from "../../Context/Todo/TodoContext";

//imports icons
import { HiPlusSmall } from "react-icons/hi2";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

export default function TodoCreate() {
    const { todos, setTodo } = useContext(TodoContext);
    const [isFocused, setFocused] = useState(false);
    const [counter, setCounter] = useState(todos.length);
    const [texts, setTexts] = useState("");

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    const handleSubmit = () => {
        if(texts === ""){
        }else{
            const newData = 
                {
                    id: counter,
                    title: texts,
                    note: "",
                    checked: false,
                    favorited: false,
                }
            setCounter(counter + 1);
            setTodo(newData);
            setTexts("");
        }
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(); 
        }
    }

    const handleText = (event) => {
        setTexts(event.target.value)
    };

    return (
        <div className={"container-todoCreate"}>
            <label className={`todoCreate ${isFocused ? "focus" : ""}`}>
                <HiOutlinePaperAirplane
                    className={`img ${isFocused ? "appear" : "fade"}`}
                />
                <HiPlusSmall
                    className={`img ${isFocused ? "fade" : "appear"}`}
                />
                <input
                    className="input"
                    type="text"
                    value={texts}
                    onChange={handleText}
                    placeholder={`${isFocused ? "" : "Write you new to do"}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleEnterPress}
                ></input>
            </label>
        </div>
    );
}
