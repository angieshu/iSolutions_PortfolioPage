import React, { Component } from 'react';
import './App.css';

import HeaderNavigation from '../header-navigation/HeaderNavigation.js';
import HeaderName from '../header-name/HeaderName.js';
import ImageCarousel from '../image-carousel/ImageCarousel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<HeaderNavigation />
	  	<HeaderName />
	  	<ImageCarousel />
      </div>
    );
  }
}

export default App;
