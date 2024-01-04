import React, { useEffect, useState } from "react";
import List from "./List";

const ListContainer = () => {
    const [list, setList] = useState([])
    /* const [continent, setContinent] = useState([]) */
    //PARA DESPUES

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => setList(data))
    }, [])


    return(
        <>
            <h1>Bienvenidos!</h1>
            <List list={list}/>
        </>
    );
};

export default ListContainer;