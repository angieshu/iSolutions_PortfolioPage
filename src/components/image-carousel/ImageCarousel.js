import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactInterval from 'react-interval';
import Slider from 'react-slick';
import { Player } from 'video-react';

import './ImageCarousel.css';

//tmp img
const imgs = [
	'http://www.liligo.fr/magazine-voyage/content/uploads/fr/2016/05/miami-cover.jpg',
	'http://52.24.98.51/wp-content/uploads/2017/09/Miami-Beach-Florida.jpg',
	'https://cdn.vox-cdn.com/thumbor/o7s6hAdbcVQbIzBnPxG9hkru-QI=/0x187:1500x1031/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/54862537/Miami_hero2.0.0.jpg',
	'http://cdn.thingsfloridianslike.com/wp-content/uploads/2015/09/Screen-Shot-2015-08-10-at-4.44.42-PM.jpg'
];

class ImageCarousel extends Component {
	// callbackFunc() {
	// 	if (this.state.tick === 999) {
	// 		this.setState({ tick: 0 });
	// 	} else {
	// 		this.setState({ tick: this.state.tick + 1 });
	// 	}
	// }
	//
	// showNextImg() {
	// 	if (this.state.i === this.state.len - 1) {
	// 		this.setState({ i: 0 });
	// 	} else {
	// 		this.setState({ i: this.state.i + 1 });
	// 	}
	// }

	render() {
		let settings = {
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplaySpeed: 2500,
			autoplay: true,
			prevArrow: <PrevArrow />,
			nextArrow: <NextArrow />,
		};
		// <ReactInterval
		// timeout={1000}
		// enabled={true}
		// callback={this.callbackFunc.bind(this)} />

		return (
			<div className="image-carousel">
				<Slider {...settings}>
					{imgs.map((asset, i) => {
						if (asset.indexOf('mov') >= 0)
							return <Player><source src={asset} /></Player>
						return <div className="image-carousel-asset" style={{backgroundImage: 'url("' + asset+ '")'}} key={i}></div>
					})}
				</Slider>
			</div>
		);
	}
}

ImageCarousel.propTypes = {
	name: PropTypes.string,
};

ImageCarousel.defaultProps = {
	name: 'Collection Catalog Software',

}

class PrevArrow extends Component {
	render() {
		return (
			<div {...this.props} className="slick-prev">
				<i className="prev-arrow"></i>
			</div>
		);
	}
}

class NextArrow extends Component {
	render() {
		return (
			<div {...this.props} className="slick-next">
				<i className="next-arrow"></i>
			</div>
		);
	}
}

export default ImageCarousel;
