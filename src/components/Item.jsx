import NavBar from "./NavBar";
import { useState } from "react";

const Item = ( {list} ) => {
    const [flag, setFlag] = useState(true)

    const changeFlag = () => {
        setFlag(!flag);
      };

    return(
        <section>
            <div>
                <NavBar/>
            </div>
            <div className="item">
                <h1>{list.name && list.name.common}</h1>
                <p>{flag ? "Flag" : "Coat of arms"}</p>
                <img onClick={changeFlag}
                    src={flag ? list.flags && list.flags.png : list.flags && list.coatOfArms.png}>
                </img>
                <h2>Oficial name: {list.name && list.name.official}</h2>
                <h2>Capital: {list.capital} | {list.region}</h2>
                <h3>Population: {list.population}</h3>
                {/* maps para otro dia */}
            </div>
        </section>
    );
};

export default Item;