import React, { Component } from 'react';
import Button from './Button.js';
import SearchBox from './SearchBox.js';

class NavBarRight extends Component{
  render() {
    return (
      <div className="nav-bar-right">
        <SearchBox />
        <span className="notification-icon"><i className="fa fa-bell " aria-hidden="true"></i></span>
        <Button />
      </div>

      
    )
  }
}
 export default NavBarRight;
