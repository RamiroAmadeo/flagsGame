import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    }

    return(
        <nav className="flex justify-around items-center py-2 bg-[#0B070B] text-[#F1F1F1] border-b-[1px] border-gray-700 ">
            <Link to="/">
                <p>FlagsGame</p>
            </Link>
            <div>
                <Link to={`/game`}>Link</Link>
            </div>
            <form>
                <input className="input"
                value={query}
                onChange={handleChange}
                type="text"
                placeholder="Search coutry..."
                />
            </form>
      </nav>
    );
};

export default NavBar;