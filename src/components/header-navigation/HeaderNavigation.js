import React, { Component } from 'react';
import './HeaderNavigation.css';

// img
import logo from '../../img/iSolutions_logo.png';

class HeaderNavigation extends Component {
  render() {
    return (
      <div className="header-navigation">
		<img src={logo} alt="iSolutions_logo" />
		<div className="header-navigation-links">
			<ul className="header-navigation-links-ul">
				<li className="header-navigation-links-ul-li"><a href='http://isolutions-inc.com/portfolio/'>Portfolio</a></li>
				<li className="header-navigation-links-ul-li"><a href='http://isolutions-inc.com/articles/'>Articles</a></li>
				<li className="header-navigation-links-ul-li"><a href='http://isolutions-inc.com/training/'>Training</a></li>
				<li className="header-navigation-links-ul-li"><a href='http://isolutions-inc.com/news/'>News</a></li>
				<li className="header-navigation-links-ul-li"><a href='http://isolutions-inc.com/locations-2/'>Locations</a></li>
				<li className="header-navigation-links-ul-li"><a href='http://isolutions-inc.com/who-we-are/'>Who We Are</a></li>
			</ul>
		</div>
		<div className="header-navigation-menu">
			<div className="header-navigation-menu-top"></div>
			<div className="header-navigation-menu-bottom"></div>
		</div>
      </div>
    );
  }
}

export default HeaderNavigation;
