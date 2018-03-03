import React, { Component } from 'react';
import './App.css';

import HeaderNavigation from '../header-navigation/HeaderNavigation.js'

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<HeaderNavigation />
		Content
      </div>
    );
  }
}

export default App;
