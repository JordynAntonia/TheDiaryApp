import React from "react"

const SearchBar = () => {
    return (
        <form>
            <input type="text" id="search" name="search" value="Search by Blog Title"></input>
            <input type="submit" value="Search"></input>
        </form>
    );
};
export default SearchBar;