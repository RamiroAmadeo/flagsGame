import React, { useEffect, useState } from "react";
import List from "./List";
import NavBar from "./NavBar";

const ListContainer = () => {
    const [list, setList] = useState([])
    const [filterList, setFilterList] = useState([])
    /* const [continent, setContinent] = useState([]) */
    //PARA DESPUES

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) =>
        setList(data) &
        setFilterList(data))
    }, [])

    const search = (query) => {
        const filtered = list.filter(item =>
          item.name.common.toLowerCase().indexOf(query.toLowerCase().trim()) === 0);
        setFilterList(filtered);
      };

    return(
        <>
            <h1>Bienvenidos!</h1>
            <NavBar onSearch={search}/>
            <List list={filterList}/>
        </>
    );
};

export default ListContainer;