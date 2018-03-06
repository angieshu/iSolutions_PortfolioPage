import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageCarousel from '../image-carousel/ImageCarousel';
import Content from '../content/Content';

import './Info.css';

class Info extends Component {

	render() {
		return (
			<div className="info">
				<ImageCarousel />
				<Content />
			</div>
		);
	}
}

Info.propTypes = {
	name: PropTypes.string,
};

Info.defaultProps = {
	name: 'Collection Catalog Software',

}

export default Info;
