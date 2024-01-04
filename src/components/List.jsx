import { Link } from "react-router-dom";

const List = ( {list} ) => {
    return(
        <ul>
            {list.map((item) => (
            <li>
                <h2>{item.name.common}</h2>
                <img src={item.flags.png}></img>
                <p>Capital: {item.capital}</p>
                <p>Continent: {item.continents}</p>
                <Link to={`/info/${item.name.common}`}>
                    <button>info</button>
                </Link>
            </li>
            ))}
        </ul>
    )
};

export default List;