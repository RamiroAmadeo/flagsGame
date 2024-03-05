import { useState } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";

const NavBar = ({ onSearch }) => {
    const gameMatch = useMatch("/game");
    const homeMatch = useMatch("/");
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    }

    return(
        <nav className="flex justify-around items-center py-2 bg-[#0B070B] text-[#F1F1F1] border-b-[1px] border-gray-700 ">
            <NavLink to="/" className={homeMatch ? "border-b-2" : ""}>
                <p>Flags</p>
            </NavLink>
            <div>
                <NavLink to="/game" className={gameMatch ? "border-b-2" : ""}>Game</NavLink>
            </div>
            <input className="input"
            value={query}
            onChange={handleChange}
            type="text"
            placeholder="Search coutry..."
            />
      </nav>
    );
};

export default NavBar;