import React from "react";

const SearchBar = (props) => {
    return (
        <input
            id="search-box"
            key="search-bar"
            value={props.searchQuery}
            placeholder={"What is it that you truly desire?"}
            onChange={(e) => props.onSearchQueryChange(e.target.value)}
        />
    );
}

export default SearchBar;