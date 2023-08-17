import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [data, setData] = useState([
        {
            id: 0,
            title: "Titulo del to Do",
            note: "descripcion de la nota",
            checked: true,
            favorited: true,
        },
        {
            id: 1,
            title: "Titulo del to Do 2",
            note: "descripcion de la nota 2",
            checked: false,
            favorited: false,
        },
        {
            id: 2,
            title: "Titulo del to Do 3",
            note: "descripcion de la nota 3",
            checked: false,
            favorited: true,
        },
        {
            id: 3,
            title: "Titulo del to Do 4",
            note: "descripcion de la nota 4",
            checked: true,
            favorited: false,
        },
    ]);

    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };
