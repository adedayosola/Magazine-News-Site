import React, { Component } from 'react';


class Menu extends Component{
  render() {
    return (
      <div className="menu">
        <div className="technology menu-item">TECHNOLOGY</div>
        <div className="news menu-item">NEWS</div>
        <div className="entertainment menu-item">ENTERTAINMENT</div>
        <div className="design menu-item">DESIGN</div>
        <div className="health menu-item">HEALTH</div>
        <div className="productivity menu-item">PRODUCTIVITY</div>
        <div className="photography menu-item">PHOTOGRAPHY</div>
      </div>
    )
  }
}
 export default Menu;
