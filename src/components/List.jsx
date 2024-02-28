import { Link } from "react-router-dom";

const List = ( {list} ) => {
    return(
        <ul className="bg-red-900 flex flex-col items-center">
            {list.map((item) => (
            <li key={item.name.common} className="bg-red-100 flex flex-col items-center border-4 rounded-lg w-max mt-4">
                <h1 className="card-title">{item.name.common}</h1>
                <img className="card-image" src={item.flags.png}></img>
                <div className="text-left text-lg">
                    <p>Capital: {item.capital}</p>
                    <p>Continent: {item.continents}</p>
                </div>
                <Link to={`/info/${item.name.common}`}>
                    <button className="btn">info</button>
                </Link>
            </li>
            ))}
        </ul>
    )
};

export default List;