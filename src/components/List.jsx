import { Link } from "react-router-dom";

const List = ( {list} ) => {
    return(
        <ul className="bg-[#0B070B] flex flex-col items-center pb-10">
            {list.map((item) => (
            <li key={item.name.common} className="card-content">
                <h1 className="card-title">{item.name.common}</h1>
                <img className="card-image" src={item.flags.png}></img>
                <div className="text-left text-lg text-[#F1F1F1]">
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