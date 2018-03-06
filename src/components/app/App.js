import React, { Component } from 'react';
import './App.css';

import HeaderNavigation from '../header-navigation/HeaderNavigation';
import HeaderName from '../header-name/HeaderName';
import Info from '../info/Info';

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<HeaderNavigation />
	  	<HeaderName />
		<Info />
      </div>
    );
  }
}

export default App;
