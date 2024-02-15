import React, {useState, useCallback} from "react";
import "../SearchBar/SearchBar.css";

const SearchBar = (props) => {
    const [term, setTerm] = useState("");
    
    const handletermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    return (
        <div className="SearchBar">
            <input placeholder="Enter a Song Title" onChange={handletermChange} />
            <button className="SearchButton" onClick={search}>
                SEARCH
            </button>
        </div>
    );
};

export default SearchBar;