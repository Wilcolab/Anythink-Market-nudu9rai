import React from "react";
import logo from "../../imgs/logo.png";
import SearchBar from "../SearchBar"

const Banner = (onSearchBarChange) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get </span>
          <SearchBar id="search-box" onChange={onSearchBarChange} />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
