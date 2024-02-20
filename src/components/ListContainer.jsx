import React, { useEffect, useState } from "react";
import List from "./List";
import NavBar from "./NavBar";

const ListContainer = () => {
    const [list, setList] = useState([])
    /* const [continent, setContinent] = useState([]) */
    //PARA DESPUES

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => setList(data))
    }, [])

    const search = (query) => {
        const filtered = list.filter(item =>
          item.toLowerCase().includes(query.toLowerCase())
        );
        setList(filtered);
      };

    return(
        <>
        <div>
      {/* <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
            <h1>Bienvenidos!</h1>
            <NavBar onSearch={search}/>
            <List list={list}/>
        </>
    );
};

export default ListContainer;