import React, { Component } from 'react';
import './HeaderNavigation.css';

// img
import logo from '../../img/iSolutions_logo.png';

class HeaderNavigation extends Component {
	state = {
		show: false,
		linksClass: "header-navigation-links",
		xClass: "header-navigation-menu"
	};

	handleClick() {
		if (this.state.show === false) {
			this.setState({
				show: true,
				linksClass: "header-navigation-links-show",
				xClass: "header-navigation-menu-active"
			});
		} else {
			this.setState({
				show: false,
				linksClass: "header-navigation-links",
				xClass: "header-navigation-menu"
			});
		}
	}

	render() {
		return (
		<div className="header">
			<div className="header-navigation">
				<img src={logo} alt="iSolutions_logo" />
				<div className="header-navigation-responsive">
					<div className={this.state.linksClass}>
						<ul className="header-navigation-links-ul">
							<li className="header-navigation-links-ul-li top"><a href='http://isolutions-inc.com/portfolio/'>PORTFOLIO</a></li>
							<li className="header-navigation-links-ul-li"><a href='http://isolutions-inc.com/articles/'>ARTICLES</a></li>
							<li className="header-navigation-links-ul-li"><a href='http://isolutions-inc.com/training/'>TRAINING</a></li>
							<li className="header-navigation-links-ul-li"><a href='http://isolutions-inc.com/news/'>NEWS</a></li>
							<li className="header-navigation-links-ul-li"><a href='http://isolutions-inc.com/locations-2/'>LOCATIONS</a></li>
							<li className="header-navigation-links-ul-li"><a href='http://isolutions-inc.com/who-we-are/'>WHO WE ARE</a></li>
						</ul>
					</div>
					<div className={this.state.xClass} onClick={this.handleClick.bind(this)}>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default HeaderNavigation;
