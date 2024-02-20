import { useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemContainer = () => {
    const [list, setList] = useState([])
    const name = useParams().name;
    /* const [continent, setContinent] = useState([]) */
    //PARA DESPUES

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
            setList(data.find((el) => el.name.common === (name)))
        })
    }, [name])

    return(
        <div className="item-container">
            <Item list={list} />
        </div>
    );
};

export default ItemContainer;