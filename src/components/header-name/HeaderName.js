import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './HeaderName.css';

// img
import arrowLeft from '../../img/arrow-left-dark.png';

class HeaderName extends Component {

	render() {
		return (
		<div className="header-name">
			<div className="header-name-container">
				<div className="header-name-name">
					<img scr={arrowLeft} alt-="" />
					<h1>{this.props.name}</h1>
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
