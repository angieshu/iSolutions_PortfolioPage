import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './HeaderName.css';

// img

class HeaderName extends Component {

	render() {
		return (
		<div className="header-name">
			<div className="header-name-container">
				<div className="header-name-name">
					<i className="header-name-arrow-left"></i>
					<h1>{this.props.name}</h1>
					<i className="header-name-arrow-right"></i>
				</div>
				<hr />
			</div>
		</div>
		);
	}
}

HeaderName.propTypes = {
	name: PropTypes.string,
};

HeaderName.defaultProps = {
	name: 'Collection Catalog Software',

}

export default HeaderName;
