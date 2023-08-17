import { useContext, useState } from "react";
import "./TodoList.css";
//import context
import { MyContext } from "./Context";
import Todo from "./Todo";


export default function TodoList() {
    //Load the to do list
    const { data } = useContext(MyContext);
    const list = data;

    //****************USE STATES********************/
    
    //For change the check status of "to dos"
    const [checks, setChecks] = useState(
        list.map((element) => {
            return element.checked;
        })
    );
    
    //For change the favorite status of "to dos"
    const [favorites, setFavorites] = useState(
        list.map((element) => {
            return element.favorited;
        })
    );

    //Event when user click the check icon, this change the icon and check status
    const handleCheck = (index) => {
        const newChecks = [...checks];
        newChecks[index] = !checks[index];
        list[index].checked = !checks[index];
        setChecks(newChecks);
    };

    //Event when user click the favorite icon, this change the icon and check status
    const handleFavorite = (index) => {
        const newFavorites = [...favorites];
        newFavorites[index] = !favorites[index];
        list[index].favorited = !favorites[index];
        setFavorites(newFavorites);
    };

    return (
        <div className="container-TodoList">
            {list.map((element) => {
                return (
                    <Todo key={element.id} info={element} handleCheck={handleCheck} handleFavorite={handleFavorite} editable={false} />
                );
            })}
        </div>
    );
}
