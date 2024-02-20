import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({list, onSearch}) => {
    const [query, setQuery] = useState("");

    const handeChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
        console.log(e.target.value)
    }

    /* !search ? list : list.filter((dato) => dato.name.common.toLowerCase().includes(search.toLocaleLowerCase)) */

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
                <input value={query} onChange={handeChange} type="text" placeholder="Search"/>
                <button type="submit"/*  onClick={handleSearch} */>Search</button>
            </form>
      </nav>
    );
};

export default NavBar;