import React, { Component } from 'react';
import NavBarRight from './NavBarRight.js';

class NavBar extends Component{
  render() {
    return (
      <nav >

        <div className="nav-bar-left">
          <div className="logo-img">

          </div>
          <div className="nav-bar-left-text">
            <a href="#">TOP STORIES</a>
            <a href="#">YOUR NEWS</a>
            <a href="#">AROUND THE WORLD</a>
          </div>
        </div>

        <NavBarRight />

      </nav>
    )
  }
}
 export default NavBar;
