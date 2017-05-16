import React, { Component } from 'react';

class SearchBox extends Component{
  render() {
    return (
      <form id="search-form" className="search-box">
        <input id="search_input" className="nav-search" type="search" placeholder="Type in your search request here."/>
        <span id="search" className="nav-bar-icon search-icon" ><i className="fa fa-search nav-bar-icon" aria-hidden="true"></i></span>
      </form>
    )
  }
}
 export default SearchBox;
