import NavBar from "./NavBar";
import { useState } from "react";

const Item = ( {list} ) => {
    const [flag, setFlag] = useState(true)

    const changeFlag = () => {
        setFlag(!flag);
      };

    return(
        <div>
            <NavBar/>
            <section className="bg-[#0B070B] flex flex-col items-center pb-10">
                <div className="bg-[#230C22] flex flex-col items-center rounded-lg w-max px-10 mt-10">
                    <h1 className="card-title">{list.name && list.name.common}</h1>
                    <p>{flag ? "Flag" : "Coat of arms"}</p>
                    <img className="card-image" onClick={changeFlag}
                        src={flag ? list.flags && list.flags.png : list.flags && list.coatOfArms.png}>
                    </img>
                    <div className="text-left text-lg mb-4 text-[#f1f1f1]">
                        <p>Oficial name: {list.name && list.name.official}</p>
                        <p>Capital: {list.capital} | {list.region}</p>
                        <p>Population: {list.population}</p>
                    </div>
                    {/* maps para otro dia */}
                </div>
            </section>
        </div>
    );
};

export default Item;