import React, { Component } from 'react';
import './App.css';

import HeaderNavigation from '../header-navigation/HeaderNavigation.js'
import HeaderName from '../header-name/HeaderName.js'

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<HeaderNavigation />
	  	<HeaderName />
      </div>
    );
  }
}

export default App;
