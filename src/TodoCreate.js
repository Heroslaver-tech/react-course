import { useContext, useState } from "react";
import "./todoCreate.css";
//import context
import { MyContext } from "./Context";

//imports icons
import { HiPlusSmall } from "react-icons/hi2";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

export default function TodoCreate() {
    const { data, setData } = useContext(MyContext);
    const [isFocused, setFocused] = useState(false);
    const [counter, setCounter] = useState(data.length);
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
            const newData = [
                ...data,
                {
                    id: counter,
                    title: texts,
                    note: "",
                    checked: false,
                    favorited: false,
                },
            ];
            setCounter(counter + 1);
            setData(newData);
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
