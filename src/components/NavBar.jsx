import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({onSearch}) => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    }

    return(
        <nav>
            <Link to="/">
                <p>Titulo</p>
            </Link>
            <div className="links">
                <a href="#">Link</a>
                <a>Disabled</a>
            </div>
            <form>
                <input value={query} onChange={handleChange} type="text" placeholder="Search"/>
            </form>
      </nav>
    );
};

export default NavBar;