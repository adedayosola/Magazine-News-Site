import React, { Component } from 'react';
import NavBar from './modules/NavBar.js';
import Footer from './modules/Footer.js';
import PageContents from './pages/PageContents.js';
// import {toggleScreen,appear} from './core/script.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <PageContents />
        <Footer />
      </div>
    );
  }
}

export default App;
