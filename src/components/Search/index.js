import React from "react";
import "./style.css";
import 'bootstrap';

function Search(props) {
  return (
      <div className="searchBlock md-form mt-0">
        <input placeholder="Narrow Your Search!" className="inputBox blockItem form-control" type="text" value={props.search} onChange={props.handleInputChange} name="search" id="search"></input>
        <div className="dropdown blockItem">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Search By...
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="https://www.google.com/">Name</a>
                <a className="dropdown-item" href="https://www.google.com/">Occupation</a>
            </div>
        </div>
        <h3 className="blockItem">Sort By:</h3>
        <div className="dropdown blockItem">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort By...
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="https://www.google.com/">Name A - Z</a>
                <a className="dropdown-item" href="https://www.google.com/">Name Z - A</a>
                <a className="dropdown-item" href="https://www.google.com/">Occupation A - Z</a>
                <a className="dropdown-item" href="https://www.google.com/">Occupation Z - A</a>
            </div>
        </div>
      </div>
  );
}

export default Search;
