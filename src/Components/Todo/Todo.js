import { useState, useContext } from "react";

//imports icons
import { IoIosCheckmarkCircleOutline } from "react-icons/io"; //check icon with fill
import { IoIosCheckmarkCircle } from "react-icons/io"; //check icon transition
import { IoIosRadioButtonOff } from "react-icons/io"; //check icon not fill
import { HiOutlineStar } from "react-icons/hi2"; //star icon not fill
import { HiStar } from "react-icons/hi2"; //star icon with fill

//import Context
import TodoContext from "../../Context/Todo/TodoContext";
import "./todo.css";

export default function Todo({ info, handleCheck, handleFavorite, editable }) {
    //****************HOOKS********************/
    //To change the panel display
    const { changePanel, selectedTodo } = useContext(TodoContext);
    //To change the icon when mouse is hover it
    const [hoverCheck, setHoverCheck] = useState(false);
    //To change the icon when mouse is hover it
    const [hoverStar, setHoverStar] = useState(false);

    const [texts, setTexts] = useState(selectedTodo.title);

    //****************FUNCTIONS********************/
    //To change check icon when the mouse enter
    const handleStarIconEnter = () => {
        setHoverStar(true);
    };

    //event to change check icon when the mouse exit
    const handleStarIconExit = () => {
        setHoverStar(false);
    };

    //To change check icon when the mouse enter
    const handleCheckIconEnter = () => {
        setHoverCheck(true);
    };

    //event to change check icon when the mouse exit
    const handleCheckIconExit = () => {
        setHoverCheck(false);
    };

    const changePanelTodo = (id) => {
        if (editable) {
        } else {
            changePanel(id);
        }
    };

    const handleSubmit = () => {
        if(texts === selectedTodo.title){
        }else{
            const newData = {
                ...selectedTodo,
                title: texts,
            }
            console.log(newData)
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

    const handleClick = (event) => {
        if(event.target.id != 'input-todo'){
            console.log('clickee otra cosa')
        }
    };

    return (
        <div
            className={editable ? "toDo-input" : "toDo"}
            onClick={() => changePanelTodo(info.id)}
        >
            <div className="button-h1">
                <button
                    className={editable ? "button-checked-input" : "button-checked"}
                    onMouseEnter={handleStarIconEnter}
                    onMouseLeave={handleStarIconExit}
                    onClick={() => handleFavorite(info.id)}
                >
                    {info.favorited ? (
                        <HiStar className="icon-checked-color" />
                    ) : hoverStar ? (
                        <HiOutlineStar className="icon-checked-color" />
                    ) : (
                        <HiOutlineStar className="icon-checked" />
                    )}
                </button>
                {editable ? (
                    <input
                        id='input-todo'
                        type="text"
                        className="input-todo"
                        value={texts}
                        onChange={handleText}
                        onKeyDown={handleEnterPress}
                        onClick={handleClick}
                    ></input>
                ) : (
                    <p style={{ marginLeft: "20px" }}>{info.title}</p>
                )}
            </div>
            <button
                className={editable ? "button-checked-input" : "button-checked"}
                onMouseEnter={handleCheckIconEnter}
                onMouseLeave={handleCheckIconExit}
                onClick={() => handleCheck(info.id)}
            >
                {info.checked ? (
                    <IoIosCheckmarkCircle className="icon-checked-color" />
                ) : hoverCheck ? (
                    <IoIosCheckmarkCircleOutline className="icon-checked" />
                ) : (
                    <IoIosRadioButtonOff className="icon-checked" />
                )}
            </button>
        </div>
    );
}
