import { useState } from "react";

//imports icons
import { IoIosCheckmarkCircleOutline } from "react-icons/io"; //check icon with fill
import { IoIosCheckmarkCircle } from "react-icons/io"; //check icon transition
import { IoIosRadioButtonOff } from "react-icons/io"; //check icon not fill
import { HiOutlineStar } from "react-icons/hi2"; //star icon not fill
import { HiStar } from "react-icons/hi2"; //star icon with fill

export default function Todo({ info, handleCheck, handleFavorite, editable }) {
    //****************USE STATES********************/

    //For change the icon when mouse is hover it
    const [hoverCheck, setHoverCheck] = useState(false);
    //For change the icon when mouse is hover it
    const [hoverStar, setHoverStar] = useState(false);

    //****************FUNCTIONS********************/
    //For change check icon when the mouse enter
    const handleStarIconEnter = () => {
        setHoverStar(true);
    };

    //event to change check icon when the mouse exit
    const handleStarIconExit = () => {
        setHoverStar(false);
    };

    //For change check icon when the mouse enter
    const handleCheckIconEnter = () => {
        setHoverCheck(true);
    };

    //event to change check icon when the mouse exit
    const handleCheckIconExit = () => {
        setHoverCheck(false);
    };

    const [panels, setPanels] = useState(false);

    const handlePanel = () => {
        setPanels(!panels);
    };

    return (
        <div className="toDo" onClick={handlePanel}>
            <div className="button-h1">
                <button
                    className="button-checked"
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
                <p style={{ marginLeft: "20px" }}>{info.title}</p>
            </div>
            <button
                className="button-checked"
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
