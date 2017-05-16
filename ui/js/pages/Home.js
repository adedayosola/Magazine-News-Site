import React, { Component } from 'react';
import Jumbotron from '../modules/Jumbotron';
import Menu from '../modules/Menu';
import ArticleRow from '../modules/ArticleRow';


class HomePage extends Component{
  render() {
    return (
      <div>
      <Jumbotron />
      <Menu />
      <ArticleRow />

      </div>
    )
  }
}
 export default HomePage;
